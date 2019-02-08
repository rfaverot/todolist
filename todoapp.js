var app = new Vue({
	el : "#app",
	
		methods : { //ajouter des actions des événements
		
		adTaches() {
			this.taches.push({nom: this.nouvelleTache, fait: false,}) // "This" c'est pour dire que ça provient de data
			this.nouvelleTache=""
		}
	},
	
		data:{
			title:"ToDo App",

		taches:[
			{
				nom: "Tâche 1",
				fait: false,
			},
			{
				nom: "Tâche 2",
				fait: true,
			},
			{
				nom: "Tâche 3",
				fait: false,
			},
			],

		nouvelleTache:"",
	},
})
