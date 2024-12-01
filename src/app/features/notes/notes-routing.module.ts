import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { NoteDetailComponent } from './pages/note-detail/note-detail.component';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'create', component: NoteDetailComponent },
  { path: 'edit/:id', component: NoteDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
