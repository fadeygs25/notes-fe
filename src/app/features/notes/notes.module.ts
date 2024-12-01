import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { NoteDetailComponent } from './pages/note-detail/note-detail.component';
import { NoteService } from './services/note.service';

@NgModule({
  declarations: [
    NoteListComponent,   // Danh sách các component của module
    NoteDetailComponent,
  ],
  imports: [
    CommonModule,        // Cung cấp các directive cơ bản như *ngIf, *ngFor
    ReactiveFormsModule, // Hỗ trợ Reactive Forms
    NotesRoutingModule,  // Module định tuyến cho Notes
    MatButtonModule,     // Angular Material Buttons
    MatFormFieldModule,  // Angular Material Form Fields
    MatInputModule,      // Angular Material Input Fields
    MatListModule,       // Angular Material List
    MatCheckboxModule,   // Angular Material Checkbox
    MatIconModule,       // Angular Material Icons
  ],
  providers: [
    NoteService,         // Đăng ký service cho module
  ],
})
export class NotesModule {}
