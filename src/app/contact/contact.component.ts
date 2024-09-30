import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DatabaseService } from './data.service';

@Component({
	selector: 'app-contact',
	standalone: true,
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
	imports: [FooterComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ContactComponent {
  isBrowser: boolean = false

	contactForm: UntypedFormGroup = new UntypedFormGroup({})
  isLoading = false
	submitted = false
	isModalOpen = false
	done = false

  constructor(
		@Inject(PLATFORM_ID) private platformId: any,
    private formBuilder: UntypedFormBuilder,
    private dataService: DatabaseService,
  ) {}
  
  
	ngOnInit(): void {
	this.isBrowser = isPlatformBrowser(this.platformId)
		if(this.isBrowser) {
			window.scrollTo(0, 0)
		}
		this.initForm()
	}

	onSubmit(): void {
		this.submitted = true
		this.done = false
		this.isLoading = true
		if (this.contactForm.invalid) {
			this.isLoading = false
			return
		}
		const form = this.contactForm.getRawValue()
		this.dataService.insertData(form).then(() => {
			this.isLoading = false
			this.submitted = false
			this.done = true
			this.isModalOpen = true
			this.contactForm.reset()
			this.contactForm.clearValidators()
		})
	}

	closeModal(): void {
    this.isModalOpen = false
  }

	get f() {
    return this.contactForm && this.contactForm.controls
  }

  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      enquiryType: ['', Validators.required],
			company: ['', Validators.required],
			position: ['', Validators.required],
			message: ['', Validators.required],
    })
  }

}
