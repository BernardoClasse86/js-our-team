// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto (in questo fase usiamo il ciclo for…in )
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// ./img/
// BONUS 2:
// Organizzare i singoli membri in card/schede (trovato un esempio allegato, ma siete liberi di gestire la grafica a vostro piacimento)
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro!

console.log('hello')

const teamElement = document.getElementById('workTeam')

// creo un array di persone nel quale inserisco i loro nomi il loro ruolo a lavoro e la loro photo
const teamMembers = [

	{
		fullName: 'Wayne Barnett',
		workRole: 'Founder & CEO',
		avatarThumb: './img/wayne-barnett-founder-ceo.jpg',
	},

	{
		fullName: 'Angela Caroll',
		workRole: 'Chief Editor',
		avatarThumb: './img/angela-caroll-chief-editor.jpg',
	},

	{
		fullName: 'Walter Gordon',
		workRole: 'Office Manager',
		avatarThumb: './img/walter-gordon-office-manager.jpg',
	},


	{
		fullName: 'Angela Lopez',
		workRole: 'Social Media Manager',
		avatarThumb: './img/angela-lopez-social-media-manager.jpg',
	},

	{
		fullName: 'Scott Estrada',
		workRole: 'Developer',
		avatarThumb: './img/scott-estrada-developer.jpg',
	},

	{
		fullName: 'Barbara Ramos',
		workRole: 'Graphic Designer',
		avatarThumb: './img/barbara-ramos-graphic-designer.jpg',
	},
]

// creo un ciclo for in che mi iteri tutti le chiavi all'interno dell array team members
for (let keyTeamInfos in teamMembers) {
	
	console.log(teamMembers[keyTeamInfos])
	// console.log(teamMembers[keyTeamInfos].fullName)
	// console.log(teamMembers[keyTeamInfos].workRole)
	// console.log(teamMembers[keyTeamInfos].avatarThumb)

	// per ogni proprieta creo una variabile che abbia il valore della proprieta stessa
	const memberName = teamMembers[keyTeamInfos].fullName
	console.log(memberName)

	const memberRole = teamMembers[keyTeamInfos].workRole
	console.log(memberRole)

	const memberThumb = teamMembers[keyTeamInfos].avatarThumb
	console.log(memberThumb)

	const tr = `
		<tr>
			<td>${memberName}</td>
			<td>${memberRole}</td>
			<td><img src="${memberThumb}"></img>}</td>
		</tr>
	`

	teamElement.innerHTML += tr
}