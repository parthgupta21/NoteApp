import { useState, ChangeEvent, useEffect } from "react";

const Notes: React.FC = () => {
  const [note, setNote] = useState<string>("");
  const [noteList, setNoteList] = useState<string[]>([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem("noteList");
    if (savedNotes) {
      setNoteList(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(noteList));
  }, [noteList]);

  const addNote = () => {
    if (note.trim() !== "") {
      setNoteList([...noteList, note]);
      setNote("");
    }
  };

  const deleteNote = (index: number) => {
    const newNoteList = noteList.filter((_, i) => i !== index);
    setNoteList(newNoteList);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  return (
    <div
      
    style={{
      maxWidth: "10000px",
      margin: "0 auto",
      padding: "40px", // increased padding
      fontFamily: "Arial, sans-serif",
      fontSize: "20px", // increased font size
    }}
  >
    <h1 style={{ textAlign: "center", color: "#444", fontSize: "2em" }}>Notes</h1> {/* increased font size */}
    <input
      type="text"
      placeholder="Enter a note"
      value={note}
      onChange={handleInputChange}
      style={{
        width: "100%",
        padding: "20px", // increased padding
        fontSize: "20px", // increased font size
        marginBottom: "20px", // increased margin
        color: "black",
      }}
    />


     <button
      onClick={addNote}
      style={{
        width: "100%",
        padding: "20px", // increased padding
        fontSize: "20px", // increased font size
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      Add Note
    </button>

      <ul style={{ listStyleType: "none", padding: "0" }}>
        {noteList.map((note, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#f8f8f8",
              padding: "10px",
                marginBottom: "10px",
              color: "black"
            }}
          >
            {note}
            <button
              onClick={() => deleteNote(index)}
              style={{
                float: "right",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
