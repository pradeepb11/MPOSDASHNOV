import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
// import { NotificationService } from '../../../../service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService ]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  // password show hide
  show_button: Boolean = false;
  show_eye: Boolean = false;
  returnUrl: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    // private notifiaction: NotificationService

    
    
  ) { }

  ngOnInit(): void {
  this.setvalidateLoginForm();
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  // setvalidate Login Form
    setvalidateLoginForm(){
      this.loginForm = this.fb.group({
        username: new FormControl('', [Validators.required,Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
        // email: new FormControl('', [Validators.required,Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)] ),
      })

    }

  // logn form Control
    get f() {return this.loginForm.controls}    

  // SHow PAssword 
    showPassword(){
      this.show_button = !this.show_button;
      this.show_eye = !this.show_eye;
    }

  /*********
   * OnSubmit Login Form
   */
   onLoginSubmit(){
    const {username, password} = this.loginForm.value;
    console.log(username, password);
    this.authService.loginUser(username, password)
    .subscribe(
      (res) =>{
      
        console.log(res)
        if(res.response.status === 'success'){
          alert('Sucessfully Login');
          this.router.navigate(['/dashboard'], {relativeTo: this.route})
        }else{
          this.loginForm.reset();
        } 
     
      }
      
    )
   }

}
