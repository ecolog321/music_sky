export const getCategoryPlaylist= async (id:string)=> {
    const idN=+id;
    const response = await fetch(`https://webdev-music-003b5b991590.herokuapp.com/catalog/selection/${idN+1}/`,

    )
}