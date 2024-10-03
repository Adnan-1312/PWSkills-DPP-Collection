// Import necessary functions from other files
import { getAllNotes } from './api.js';
import { renderNotes, setupNoteForm } from './noteUI.js';

// This function sets up the initial state of the app
async function initApp() {
  // Get all notes from the server
  const notes = await getAllNotes();
  // Display the notes on the page
  renderNotes(notes);
  // Set up the form for creating new notes
  setupNoteForm();
}

// Start the app
initApp();
