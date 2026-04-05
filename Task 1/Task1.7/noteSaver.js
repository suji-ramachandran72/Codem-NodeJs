const fs=require('fs');
function saveNote(noteText){
    fs.appendFileSync("notes.text",noteText+"\n");
}
module.exports=saveNote;
