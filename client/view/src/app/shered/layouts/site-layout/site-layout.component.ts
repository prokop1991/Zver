import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {

   dropdown_show:boolean = false;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login'])

  }

  dropdown_show_fn(){
    console.log(this.dropdown_show)
    this.dropdown_show = !this.dropdown_show
  }

}
