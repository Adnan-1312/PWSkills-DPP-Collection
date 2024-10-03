// This file contains functions for communicating with the server

// The base URL for our API
const API_URL = 'http://localhost:3000';

// Get all notes from the server
export async function getAllNotes() {
  const response = await fetch(`${API_URL}/notes`);
  return response.json();
}

// Create a new note on the server
export async function createNote(note) {
  const response = await fetch(`${API_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  return response.json();
}

// Update an existing note on the server
export async function updateNote(id, note) {
  const response = await fetch(`${API_URL}/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  return response.json();
}

// Delete a note from the server
export async function deleteNote(id) {
  await fetch(`${API_URL}/notes/${id}`, {
    method: 'DELETE',
  });
}
