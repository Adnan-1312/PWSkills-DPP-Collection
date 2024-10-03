// Import functions for interacting with the server
import { createNote, updateNote, deleteNote, getAllNotes } from './api.js';

// Display all notes on the page
export function renderNotes(notes) {
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = ''; // Clear existing notes
  notes.forEach((note) => {
    const noteElement = createNoteElement(note);
    notesList.appendChild(noteElement);
  });
}

// Create an HTML element for a single note
function createNoteElement(note) {
  const noteDiv = document.createElement('div');
  noteDiv.className = 'note';
  // Set the inner HTML of the note element
  noteDiv.innerHTML = `
    <div class="note-content">
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <div class="note-dates">
        <small><i class="far fa-clock"></i> Created: ${new Date(note.createdAt).toLocaleString()}</small>
        <small><i class="fas fa-edit"></i> Updated: ${new Date(note.updatedAt).toLocaleString()}</small>
      </div>
    </div>
    <div class="note-actions">
      <label class="note-done">
        <input type="checkbox" ${note.isDone ? 'checked' : ''}>
        <span>Done</span>
      </label>
      <div>
        <button class="edit-note" data-id="${note.id}"><i class="fas fa-pencil-alt"></i> Edit</button>
        <button class="delete-note" data-id="${note.id}"><i class="fas fa-trash-alt"></i> Delete</button>
      </div>
    </div>
  `;

  // Add event listeners for note actions
  const checkbox = noteDiv.querySelector('.note-done input');
  checkbox.addEventListener('change', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleNoteDone(note, e.target.checked);
  });

  const editButton = noteDiv.querySelector('.edit-note');
  editButton.addEventListener('click', () => editNote(note));

  const deleteButton = noteDiv.querySelector('.delete-note');
  deleteButton.addEventListener('click', () => deleteNoteHandler(note.id));

  return noteDiv;
}

// Set up the form for creating new notes
export function setupNoteForm() {
  const saveButton = document.getElementById('save-note');
  saveButton.addEventListener('click', saveNote);
}

// Save a new note
async function saveNote() {
  const titleInput = document.getElementById('note-title');
  const contentInput = document.getElementById('note-content');

  // Check if both fields are empty
  if (!titleInput.value.trim() && !contentInput.value.trim()) {
    alert('Please enter a title or content for the note.');
    return;
  }

  const note = {
    title: titleInput.value,
    content: contentInput.value,
    isDone: false,
  };

  // Save the note to the server
  await createNote(note);
  // Refresh the notes list
  const notes = await getAllNotes();
  renderNotes(notes);

  // Clear the form
  titleInput.value = '';
  contentInput.value = '';
}

// Edit an existing note
async function editNote(note) {
  const titleInput = document.getElementById('note-title');
  const contentInput = document.getElementById('note-content');
  const saveButton = document.getElementById('save-note');

  // Fill the form with the note's current values
  titleInput.value = note.title;
  contentInput.value = note.content;
  saveButton.innerHTML = '<i class="fas fa-save"></i> Update Note';

  // Create a function to handle the update
  const updateHandler = async () => {
    // Check if both fields are empty
    if (!titleInput.value.trim() && !contentInput.value.trim()) {
      alert('Please enter a title or content for the note.');
      return;
    }

    const updatedNote = {
      title: titleInput.value,
      content: contentInput.value,
      isDone: note.isDone,
    };

    // Update the note on the server
    await updateNote(note.id, updatedNote);
    // Refresh the notes list
    const notes = await getAllNotes();
    renderNotes(notes);

    // Reset the form
    titleInput.value = '';
    contentInput.value = '';
    saveButton.innerHTML = '<i class="fas fa-save"></i> Save Note';

    // Remove the update event listener
    saveButton.removeEventListener('click', updateHandler);

    // Add back the original save event listener
    saveButton.addEventListener('click', saveNote);
  };

  // Remove the previous click event listener
  saveButton.removeEventListener('click', saveNote);

  // Add the new click event listener for updating
  saveButton.addEventListener('click', updateHandler);
}

// Delete a note
async function deleteNoteHandler(id) {
  const confirmDelete = confirm('Are you sure you want to delete this note?');
  if (confirmDelete) {
    // Delete the note from the server
    await deleteNote(id);
    // Refresh the notes list
    const notes = await getAllNotes();
    renderNotes(notes);
  }
}

// Toggle the 'done' status of a note
async function toggleNoteDone(note, isDone) {
  const updatedNote = { ...note, isDone };
  // Update the note on the server
  await updateNote(note.id, updatedNote);
  // Refresh the notes list
  const notes = await getAllNotes();
  renderNotes(notes);
}
