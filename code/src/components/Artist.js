import React from 'react'
import data from '../data.json'


const Artist = (props) => {
  console.log(props.artists[0].name)
  const Artists = props.artists.map(artist => {
    return <a key={artist.id} href={artist.external_urls.spotify}>{artist.name}</a>
  });



  return Artists.join(", ")
  
};

{/* <a className="artist-name" href={artist.external_urls.spotify}>
<span>{artist.name}</span>
</a> */}

//Artists.length ? Artists.join(", ") + "&" + LastArtist : LastArtist

// const FinalArtist = `& ${props[-1].name}`
// if (props.lenght > 1) {
// return (
// <a href={props.url}>
//   <p>{props[0].name} & {props[1].name} </p>
// </a>)
// } else if (props.lenght > 2) {
//   return ( 
//   <a href={props.url}>
//   <p>{props.join(', ') && {FinalArtist}}</p>
// </a>)
// } else {
//   return (
//   <a href={props.url}>
//   <p>{props.name}</p>
// </a>)
// }

// const ArtistArray = data.albums.items.map((item) => {
//   return item.artists
// })
/*
const ArtistArrayMap = ArtistArray.map((artistt) => {
  return artistt.name
})

console.log(ArtistArray)
console.log(ArtistArrayMap)*/

// const Artist = (props) => {

//   return (
    
//   )
// 

// const Artist = ArtistArray.map((artist) => {
//   console.log(artist)
//   return (
//       <p className="artist-name">{artist[0].name}</p>
//   )
//   })

//   const ArtistArray = data.album.items.map((item) => {
//     return item.map 
//   })

export default Artist