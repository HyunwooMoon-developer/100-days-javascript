const noteBtn = document.getElementById('add-btn');
const noteTitle = document.getElementById('note-title');
const noteText = document.getElementById('note-text');
const clear = document.querySelector('.clear');

//Get notes from local storage
function getNotes() {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  console.log(notesObj);
}

//Note Button Eventlistener
noteBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (noteTitle.value == '' || noteText.value == '') {
    return alert('Please add note title and details');
  }

  getNotes();

  let myObj = {
    title: noteTitle.value,
    text: noteText.value,
  };
  notesObj.push(myObj);
  localStorage.setItem('notes', JSON.stringify(notesObj));

  document.querySelector('form').reset();
  showNotes();
});

function showNotes() {
  getNotes();
  let html = '';
  notesObj.forEach(function (el, idx) {
    html += `
    <div class="note">
      <div class="note-cta">
      <p class="note-counter">Note ${idx + 1}</p>
      <div class="note-cta-btn">
        <button class="note-btn" id="${idx}" onclick="deleteNote(this.id)">
          <i class="fas fa-trash"></i> Delete
        </button>
        <button class="note-btn edit-btn" id="${idx}" onclick="editNote(this.id)">
          <i class="fas fa-edit"></i> Edit
        </button>
      </div>
      </div>
      <hr />
      <h3 class="note-title">Title: ${el.title}</h3>
      <p class="note-text">${el.text}</p>
    </div>`;
  });
  let noteElm = document.getElementById('notes');

  if (notesObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = 'No Notes added, Please add a Note';
  }
}

//Delete A Single Note
function deleteNote(idx) {
  let confirmDel = confirm('Delete this Note');
  if (confirmDel) {
    getNotes();
    notesObj.splice(idx, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
  }
}

//Delete All Notes
clear.addEventListener('click', () => {
  localStorage.clear();
  showNotes();
});

//Edit Note
function editNote(idx) {
  if (noteTitle.value !== '' || noteText.value !== '') {
    return alert('Please clear the form before Editing');
  }
  getNotes();

  noteTitle.value = notesObj[idx].title;
  noteText.value = notesObj[idx].text;

  notesObj.splice(idx, 1);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotes();
}

showNotes();
