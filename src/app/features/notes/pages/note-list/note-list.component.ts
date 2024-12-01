import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getNotes().subscribe((data) => (this.notes = data));
  }

  viewNote(id: string): void {
    // Điều hướng đến chi tiết ghi chú
  }

  addNote(): void {
    // Điều hướng đến form thêm mới ghi chú
  }

  deleteNote(id: string): void {
    this.noteService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    });
  }
}
