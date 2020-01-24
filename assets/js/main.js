

// protype style code

function evetnListeners(){
	const add_question=document.querySelector(".add-question");
	const close=document.querySelector(".close");
	const question=document.querySelector("#question");
	const answer=document.querySelector("#answer");
	const save=document.querySelector(".save");
	const hide_answer=document.querySelector(".hide-answer");
	const edit=document.querySelector(".edit");
	const answer_box=document.querySelector(".answer-box");
	const question_box=document.querySelector(".question-box");
	const insert=document.querySelector(".insert-box");
	let element=0;
const str=[];

	let mainUI =new UI();

	insert.addEventListener("click",function(e){
		if(e.target.classList.contains("delete")){
			e.target.parentElement.parentElement.parentElement.remove();
		}
	});

	// show hide 
	insert.addEventListener("click",function(e){
		if(e.target.classList.contains("hide-answer")){
			mainUI.show_hide(e.target.nextElementSibling);
		}
	});

	insert.addEventListener("click",function(e){
		if(e.target.classList.contains("edit")){
			let a=e.target;
			let first=a.parentElement.previousElementSibling;
			let secound=a.parentElement.parentElement.firstElementChild;
			let pass = new Text(first,secound);

			question.value = pass.answer;
			answer.value =pass.question ;
			
			e.target.parentElement.parentElement.parentElement.remove();
			

		}
		
	});

	close.addEventListener("click",function(){
		mainUI.show_hide(question_box);
			question.value = "";
			answer.value ="";
	});

	add_question.addEventListener("click",function(){
		mainUI.show_hide(question_box)
	});

	save.addEventListener("click",function(e){
		e.preventDefault();
		let pass = new value(question,answer)
		mainUI.answer(insert,pass);
		question.value = "";
		answer.value = "";
		element++;
	})



};


function UI(){};


// delete  
UI.prototype.Delete = function(dele){
	dele.classList.add("d-none");		

}

// show  
UI.prototype.Show = function(show){
	show.classList.remove("d-none");		

}

// answer 

UI.prototype.answer= function(parent,val){
		const str=[" "];


	if(question.value == "" || answer.value == ""){

		alert("please add info")
	}else{
		
	for(let a=0; a<str.length; a++){

		if(str[a]== question.value){
			alert("new valu")

				
	}else{
		str.push(question.value)
		let div = document.createElement("div");
	div.classList.add("col-md-4");
	div.innerHTML=`<div class="answer-box"><h3 class="question-heading">${val.question}</h3><span class="hide-answer">show/Hide</span>
	<div class="answer-text answer-pera">${val.answer}</div>
	<div class="edit-box">
	<button class="btn edit">Edit</button>
	<button class="btn delete">Delete</button>
	</div>
	</div>
	`;
	parent.appendChild(div);
		}
break;
	}


	}
	

};

// edit  
UI.prototype.Edit = function(show){
	console.log(show.question)		
}

// show hide  
UI.prototype.show_hide = function(show){

	show.classList.toggle("d-block");		
}


//run when document is loaded
function value(q,a){
	this.question=q.value;
	this.answer=a.value;
}

// inner text
function Text(q,a){
	this.question=q.innerHTML;
	this.answer=a.innerHTML;
}

document.addEventListener("DOMContentLoaded", function() {
	evetnListeners();
});
