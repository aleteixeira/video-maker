const readline = require ('readline-sync')

function start(){
	const content = {}
	
	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()
	
	function askAndReturnSearchTerm(){
		// return 'Term Example'
		return readline.question('Type a Wikipedia search term: ')
	}
	
	function askAndReturnPrefix(){
		const prefixes = ['Who is', 'What is', 'The history of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option')
		const selectPrefixText = prefixes[selectedPrefixIndex]
		
		return selectPrefixText
		//console.log(selectPrefixText)		
	}	
	
	console.log(content)
}

start()