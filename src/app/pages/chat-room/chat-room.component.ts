import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket, io } from 'socket.io-client';
import { Channel, Users } from 'src/app/models/channel';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit {
  userToken = sessionStorage.getItem('user');
  keyword = '';
  socket!: Socket;
  id = this.route.snapshot.paramMap.get('id');
  userId = sessionStorage.getItem('userId');
  channel!: Channel;
  users: Users[] = [];
  messages: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private channelService: ChannelService
  ) {}

  ngOnInit(): void {
    if (!this.userToken) {
      this.router.navigate(['/login']);
    } else {
      this.getUserChannel();
      this.socket = io('https://powerful-plains-83584.herokuapp.com');
      let data = {
        _id: this.userId,
        roomId: this.id,
      };
      this.socket.emit('accessChannel', data);
      this.socket.on('joinConfirm', (messages) => {
        messages.forEach((msg: any, i: number) => {
          let time = new Date(msg.createdAt);

          let date =
            time.getDate() + '/' + time.getMonth() + '/' + time.getFullYear();

          let minutes =
            time.getMinutes().toString().length == 1
              ? '0' + time.getMinutes()
              : time.getMinutes();

          let msgObj = {
            sender: msg.sender.firstName + ' ' + msg.sender.lastName,
            content: msg.content,
            date: date,
            time: time.getHours() + ':' + minutes,
          };
          this.messages[i] = msgObj;
          const chatMessages = document.querySelector('.convo');
          if (chatMessages) chatMessages.scrollTop = chatMessages?.scrollHeight;
        });
        console.log(this.messages);
      });

      this.socket.on('message', (message) => {
        let time = new Date();
        let date =
          time.getDate() + '/' + time.getMonth() + '/' + time.getFullYear();
        let minutes =
          time.getMinutes().toString().length == 1
            ? '0' + time.getMinutes()
            : time.getMinutes();

        let obj = {
          sender: message.sender,
          content: message.content,
          date: date,
          time: time.getHours() + ':' + minutes,
        };
        this.messages.push(obj);
        const chatMessages = document.querySelector('.convo');
        if (chatMessages) chatMessages.scrollTop = chatMessages?.scrollHeight;
        console.log(this.messages);
      });
    }
  }

  ngOnDestroy() {
    this.socket.emit('leaveChannel', this.id);
  }

  getUserChannel() {
    this.channelService
      .getAllChannels(this.userToken)
      .then((resp: any) => {
        let rooms: Channel[] = resp.rooms;
        rooms.forEach((ch) => {
          if (ch._id === this.id) {
            this.channel = ch;
            this.users = this.channel.joinedUsers;
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  Send() {
    let data = {
      roomId: this.id,
      _id: this.userId,
      content: this.keyword,
    };
    let _data = {
      roomId: this.id,
      content: this.keyword,
    };
    this.channelService
      .postMessage(this.userToken, _data)
      .then((response: any) => {
        if (response.status === 'success') {
          this.socket.emit('sendMessage', data);
          const chatMessages = document.querySelector('.convo');
          if (chatMessages) chatMessages.scrollTop = chatMessages?.scrollHeight;
          this.keyword = '';
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
