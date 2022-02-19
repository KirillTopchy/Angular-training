import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$?: Observable<User[]>
  columnTitles = [
    'ID',
    'Name',
    'Username'
  ];

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  viewUser(id: number): void {
    this.router.navigate(['/users', id]).then();
  }
}
