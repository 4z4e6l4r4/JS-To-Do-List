// Category
    // Name
    // Description
//toDo List
    // Name
    // Description
    // Satatus
    // todoCategory
//User
    // Name
    // Surname
    //TodoList
        //Active TodoList function
        //Done TodoList function
        //All ToDoList Function
        //AddTodolist
        //DeleteTodoList
        //Edit ToDoList

class Category{
    constructor(Name, Description)
    {
        this.Name = Name;
        this.Description = Description;
    }
}

class ToDoItem{
    constructor(Name, Description, ToDoCategroy)
    {
        this.Id = 0;
        this.Name = Name; //dışarıdan aldığını parametreyi property şeklinde burada tanımlıyor
        this.Description = Description;
        this.Status = False; //default olarak bunu kendisini verecek
        this.ToDoCategroy = ToDoCategroy;
    }
}

let toDoId = 0;
class User {
    constructor(Name, Surname)
    {
        this.Name = Name;
        this.Surname = Surname;
        this.ToDoList = []; //ToDoItem classından nesne eklenecek List <ToDoItem>
    }

    addToDoList(todoItem) //ToDoItem classından nesne alıyoruz
    {
        toDoId++;
        todoItem.Id = toDoId;
        return this.ToDoList.push(todoItem);
    }

    deleteToDoList()
    {
        return this.ToDoList = this.ToDoList.filter(deletetodo => deletetodo == todoItem)
    }

    editToDoList(Id){
        const indexId = this.ToDoList.findIndex(findIndex => findIndex.Id == Id); //find ile aldığınız obje yeni bir obje olarak gelir bu yüzden onu düzenleyemezsiniz.
        if(id != -1){
            this.ToDoList[indexId].Status = true;
        }
    }

    activeToDoList()
    {
        return this.ToDoList = this.ToDoList.filter(todo => todo.Status==false);
    }

    doneToDoList()
    {
        return this.ToDoList = this.ToDoList.filter(todo => todo.Status == true);
    }

    allToDoList()
    {
        return this.ToDoList;
    }
}





















































// 