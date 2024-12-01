import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent implements OnInit {
  noteForm: FormGroup;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService,
  ) {
    this.noteForm = this.fb.group({
      title: [''],
      description: [''],
      isActive: [false],
    });
  }

  ngOnInit(): void {
    const noteId = this.route.snapshot.paramMap.get('id');
    if (noteId) {
      this.isEdit = true;
      this.noteService.getNoteById(noteId).subscribe((note) => {
        this.noteForm.patchValue(note);
      });
    }
  }

  saveNote(): void {
    if (this.isEdit) {
      this.noteService.updateNote(this.route.snapshot.paramMap.get('id')!, this.noteForm.value).subscribe(() => {
        this.router.navigate(['/notes']);
      });
    } else {
      this.noteService.createNote(this.noteForm.value).subscribe(() => {
        this.router.navigate(['/notes']);
      });
    }
  }
}
