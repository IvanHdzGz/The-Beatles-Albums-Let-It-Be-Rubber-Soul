const albums = [
  // Album: let It Be
  {
    album: "let It Be",
    anio: 1969,
    discografica: "Apple Records",
    numeroCanciones: 15,
    canciones: [
      // Lado A
      {
        nombre: "One After 909",
        url: "https://www.youtube.com/embed/t8UeWjynWvE",
        duracion: "2:54",
      },
      {
        nombre: "Rocker",
        url: "https://www.youtube.com/embed/NS3jODYQQfk",
        duracion: "",
      },
      {
        nombre: "Save the Last Dance for Me",
        url: "https://www.youtube.com/embed/pB-AdpK2HUA",
        duracion: "1:34",
      },
      {
        nombre: "Don't Let Me Down",
        url: "https://www.youtube.com/embed/NCtzkaL2t_Y",
        duracion: "3:31",
      },
      {
        nombre: "Dig a Pony",
        url: "https://www.youtube.com/embed/LpdJE7HG8Ls",
        duracion: "3:55",
      },
      {
        nombre: "I've Got a Feeling",
        url: "https://www.youtube.com/embed/DbKPZd5oihc",
        duracion: "3:37",
      },
      {
        nombre: "Get Back",
        url: "https://www.youtube.com/embed/IKJqecxswCA",
        duracion: "3:09",
      },

      // Lado B
      {
        nombre: "For You Blue",
        url: "https://www.youtube.com/embed/TIFHRaZERHg",
        duracion: "2:32",
      },
      {
        nombre: "Teddy Boy",
        url: "https://www.youtube.com/embed/pxd5UG1_NTc",
        duracion: "2:24",
      },
      {
        nombre: "Two of Us",
        url: "https://www.youtube.com/embed/cLQox8e9688",
        duracion: "3:36",
      },
      {
        nombre: "Maggie Mae",
        url: "https://www.youtube.com/embed/tSn1r9--tq4",
        duracion: "0:40",
      },
      {
        nombre: "Dig It",
        url: "https://www.youtube.com/embed/fUUOX6kAIxI",
        duracion: "0:50",
      },
      {
        nombre: "Let It Be",
        url: "https://www.youtube.com/embed/CGj85pVzRJs",
        duracion: "4:02",
      },
      {
        nombre: "The Long and Winding Road",
        url: "https://www.youtube.com/embed/fR4HjTH_fTM",
        duracion: "3:38",
      },
      {
        nombre: "Get Back (reprise)",
        url: "https://www.youtube.com/embed/DAoKvYgPcnw",
        duracion: "0:44",
      },
    ],
  },
  // Album: Rubber Soul
  {
    album: "Rubber Soul",
    anio: 1965,
    discografica: "Parlophone",
    num_canciones: 14,
    canciones: [
      // Lado A
      {
        nombre: "Drive My Car",
        url: "https://www.youtube.com/embed/kfSQkZuIx84",
        duracion: "	2:28",
      },
      {
        nombre: "Norwegian Wood (This Bird Has Flown)",
        url: "https://www.youtube.com/embed/Y_V6y1ZCg_8",
        duracion: "2:04",
      },
      {
        nombre: "You Won't See Me",
        url: "https://www.youtube.com/embed/OsjTO0yZQjk",
        duracion: "3:19",
      },
      {
        nombre: "Nowhere Man",
        url: "https://www.youtube.com/embed/8scSwaKbE64",
        duracion: "2:43",
      },
      {
        nombre: "Think for Yourselff",
        url: "https://www.youtube.com/embed/vtx5NTxebJk",
        duracion: "2:18",
      },
      {
        nombre: "The World",
        url: "https://www.youtube.com/embed/RfBEqiEhCgM",
        duracion: "2:43",
      },
      {
        nombre: "Michelle",
        url: "https://www.youtube.com/embed/WoBLi5eE-wY",
        duracion: "2:42",
      },

      // Lado B
      {
        nombre: "What Goes On",
        url: "https://www.youtube.com/embed/PtC_l4kz7yw",
        duracion: "2:48",
      },
      {
        nombre: "Girl",
        url: "https://www.youtube.com/embed/-8l3ntDR_lI",
        duracion: "2:31",
      },
      {
        nombre: "I'm Looking Through You",
        url: "https://www.youtube.com/embed/gH6i9JAdJrQ",
        duracion: "2:26",
      },
      {
        nombre: "In My Life",
        url: "https://www.youtube.com/embed/YBcdt6DsLQA",
        duracion: "2:26",
      },
      {
        nombre: "Wait",
        url: "https://www.youtube.com/embed/qJngWval8Bc",
        duracion: "2:14",
      },
      {
        nombre: "If I Needed Someone",
        url: "https://www.youtube.com/embed/Kt5OoWr4v1k",
        duracion: "2:22",
      },
      {
        nombre: "Run for Your Life",
        url: "https://www.youtube.com/embed/yzHXtxcIkg4",
        duracion: "2:22",
      },
    ],
  },
];
// Función que permite cambiar la canción al presionar el nombre de la canción
function cambiarCancion(indexAlbum, indexCancion) {
  const vid1 = document.getElementById(`vid${indexAlbum + 1}`);
  const cancion = albums[indexAlbum].canciones[indexCancion];
  vid1.src = cancion.url;
}