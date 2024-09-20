import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log({title, description})
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
             type="text"
             placeholder="Digite o título da tarefa"
             value={title}
             onChange={(event) => setTitle(event.target.value)}
             />
            <Input
             type="text"
             placeholder="Digite o descrição da tarefa"
             value={description}
             onChange={(event) => setDescription(event.target.value)}
             />
            <button
             onClick={() => {
                if (!title || !description) {
                    return alert("Preencha todos os campos para adicionar a tarefa.");
                } else {
                    onAddTaskSubmit(title, description);
                }
                setTitle("");
                setDescription("");
             }}
             className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
                Adicionar
            </button>
        </div>
    );
}

export default AddTask;