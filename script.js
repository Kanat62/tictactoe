const {log} = console

const container = document.querySelector('.container')

for(let i = 1; i < 10; i++){
	const div = document.createElement('div')
	div.classList.add('cell')
	div.setAttribute('data', i)

	container.append(div)
}

const cells = document.querySelectorAll('.cell')

function game() {
	let player = 'o'
	const winIndex = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7],
	]
	let data = {}

	cells.forEach(item=>{
		item.onclick = function(e){
			if( this.innerText === '' ) {
				player = player === 'x' ? player ='o': player = 'x'
				this.innerText = player
				data[+this.getAttribute('data')] = this.innerText
				for(let i = 0; i < winIndex.length; i++){
					let countX = 0
					let countO = 0
					for(let k = 0; k < winIndex[0].length; k++){
						if(data[winIndex[i][k]] === 'x' ) countX++
						if(data[winIndex[i][k]] === 'o' ) countO++
					}
					if(countX === 3) playerWin('X')
					if(countO === 3) playerWin('O')
				}
			}
			let a = 0
			for(let i = 0; i < cells.length;i++){
				if(cells[i].innerText !== '') a++
			}
			if(a=== 9) playerWin()
		}
	})
}

function playerWin(player){
	setTimeout(() => {
	 	if(player === undefined) alert('Ничя')
	 	else{alert(player+ ' win')}
	 	cells.forEach(item => {
	 		item.innerText = ''
	 	})
	 	game()
	} ,100)

}
game()

