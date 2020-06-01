import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'formica-quick-creation-element',
  templateUrl: './quick-creation-element.component.html',
  styleUrls: ['./quick-creation-element.component.sass']
})
export class QuickCreationElementComponent {

  @Output() submitted: EventEmitter<{ name: string, description: string }> = new EventEmitter();
  @Output() left: EventEmitter<void> = new EventEmitter<void>();

  createElementForm = new FormGroup({
    name: new FormControl('', Validators.required),
  })

  constructor() {
  }

  handleSubmit() {
    this.submitted.emit(this.createElementForm.value);
    this.createElementForm.reset();
  }

  handleLeave() {
    this.left.emit();
    this.createElementForm.reset();
  }
}
