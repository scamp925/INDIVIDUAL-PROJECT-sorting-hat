const students = [
  {
    id: 1,
    studentImg: "http://images6.fanpop.com/image/photos/43400000/Harry-Potter-fan-art-harry-potter-43424936-500-613.jpg",
    name: "Harry Potter",
    houseImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d5z2f66-d8d9c79c-12d0-47e9-9d93-c36efb2bcbff.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__gryffindor_stripes_by_theladyavatar_d5z2f66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNXoyZjY2LWQ4ZDljNzljLTEyZDAtNDdlOS05ZDkzLWMzNmVmYjJiY2JmZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.i-630GtLeaEKfAMKHVrjq5FK8sOyzL1COwqoNjhnyzg",
    house: "Gryffindor",
    expelled: false
  },
  {
    id: 2,
    studentImg: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/06/Ron-Weasley-Is-Our-King-Harry-Potter-Fan-Art.jpg?q=50&fit=crop&w=740&h=888&dpr=1.5",
    name: "Ron Weasley",
    houseImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d5z2f66-d8d9c79c-12d0-47e9-9d93-c36efb2bcbff.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__gryffindor_stripes_by_theladyavatar_d5z2f66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNXoyZjY2LWQ4ZDljNzljLTEyZDAtNDdlOS05ZDkzLWMzNmVmYjJiY2JmZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.i-630GtLeaEKfAMKHVrjq5FK8sOyzL1COwqoNjhnyzg",
    house: "Gryffindor",
    expelled: false
  },
  {
    id: 3,
    studentImg: "https://preview.redd.it/btoxqxzch3881.png?auto=webp&s=39423bef48cc8d0dd02e2cdece5fab9277daa686",
    name: "Hermione Granger",
    houseImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d5z2f66-d8d9c79c-12d0-47e9-9d93-c36efb2bcbff.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__gryffindor_stripes_by_theladyavatar_d5z2f66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNXoyZjY2LWQ4ZDljNzljLTEyZDAtNDdlOS05ZDkzLWMzNmVmYjJiY2JmZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.i-630GtLeaEKfAMKHVrjq5FK8sOyzL1COwqoNjhnyzg",
    house: "Gryffindor",
    expelled: false
  },
  {
    id: 4,
    studentImg: "https://cdnb.artstation.com/p/assets/images/images/026/914/031/large/maria-hideki-.jpg?1592162734",
    name: "Cedric Diggory",
    houseImg: "https://i.pinimg.com/originals/15/0f/2b/150f2b856ea49796ddd9d14cc7607a86.jpg",
    house: "Hufflepuff",
    expelled: false
  },
  {
    id: 5,
    studentImg: "https://img.wattpad.com/8f7e233550cbb1dbf09f20c7ac18b4ad59e4db89/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6646665f57566248396c73784c513d3d2d3138322e313632336435363664613738663237353135303339303032313337392e6a7067?s=fit&w=720&h=720",
    name: "Luna Lovegood",
    houseImg: "https://bookstr.com/wp-content/uploads/2020/03/Ravenclaw-colors-I-T-768x480.jpg",
    house: "Ravenclaw",
    expelled: false
  },
  {
    "id": 6,
    "studentImg": "https://i.pinimg.com/originals/57/ef/7b/57ef7befa1d42f374a03fb1739e60034.jpg",
    "name": "Paige",
    "houseImg": "https://bookstr.com/wp-content/uploads/2020/03/Ravenclaw-colors-I-T-768x480.jpg",
    "house": "Ravenclaw",
    "expelled": false
  }, {
    "id": 7,
    "studentImg": "https://www.cuded.com/wp-content/uploads/2013/09/34-broken_open_by_hayleylv-d4dljp4.jpg",
    "name": "Shae",
    "houseImg": "https://i.pinimg.com/originals/15/0f/2b/150f2b856ea49796ddd9d14cc7607a86.jpg",
    "house": "Hufflepuff",
    "expelled": true
  }, {
    "id": 8,
    "studentImg": "https://www.thisiscolossal.com/wp-content/uploads/2021/08/rainbow_series_3.jpg",
    "name": "Kore",
    "houseImg": "https://cdn.wallpapersafari.com/50/12/WVmuwa.jpg",
    "house": "Slytherin",
    "expelled": false
  }, {
    "id": 9,
    "studentImg": "https://webneel.com/daily/sites/default/files/images/daily/06-2013/7-hyper-realistic-color-pencil-drawing-by-christina-papagianni.jpg",
    "name": "Ashlan",
    "houseImg": "https://i.pinimg.com/originals/15/0f/2b/150f2b856ea49796ddd9d14cc7607a86.jpg",
    "house": "Hufflepuff",
    "expelled": false
  }, {
    "id": 10,
    "studentImg": "https://mymodernmet.com/wp/wp-content/uploads/2021/09/lui-ferreyra-geometric-portraits-7.jpg",
    "name": "Thibaud",
    "houseImg": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d5z2f66-d8d9c79c-12d0-47e9-9d93-c36efb2bcbff.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__gryffindor_stripes_by_theladyavatar_d5z2f66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNXoyZjY2LWQ4ZDljNzljLTEyZDAtNDdlOS05ZDkzLWMzNmVmYjJiY2JmZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.i-630GtLeaEKfAMKHVrjq5FK8sOyzL1COwqoNjhnyzg",
    "house": "Gryffindor",
    "expelled": false
  }, {
    "id": 11,
    "studentImg": "https://artpeople.net/wp-content/uploads/2017/04/Beautiful-Sketches-of-Hands-and-Portraits-by-Lui-Ferreyra-1-1.jpg",
    "name": "Forest",
    "houseImg": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d5z2f66-d8d9c79c-12d0-47e9-9d93-c36efb2bcbff.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__gryffindor_stripes_by_theladyavatar_d5z2f66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNXoyZjY2LWQ4ZDljNzljLTEyZDAtNDdlOS05ZDkzLWMzNmVmYjJiY2JmZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.i-630GtLeaEKfAMKHVrjq5FK8sOyzL1COwqoNjhnyzg",
    "house": "Gryffindor",
    "expelled": false
  }, {
    "id": 12,
    "studentImg": "https://mir-s3-cdn-cf.behance.net/projects/404/1f19e8113972737.Y3JvcCw5NjksNzU4LDIxNiw0ODk.jpg",
    "name": "Johnna",
    "houseImg": "https://bookstr.com/wp-content/uploads/2020/03/Ravenclaw-colors-I-T-768x480.jpg",
    "house": "Ravenclaw",
    "expelled": false
  }, {
    "id": 13,
    "studentImg": "http://www.luiferreyra.com/wp-content/uploads/2015/11/idioma_7_770.jpg",
    "name": "Aubree",
    "houseImg": "https://bookstr.com/wp-content/uploads/2020/03/Ravenclaw-colors-I-T-768x480.jpg",
    "house": "Ravenclaw",
    "expelled": true
  }, {
    "id": 14,
    "studentImg": "https://i.pinimg.com/originals/18/91/62/189162797afc7d36a614dde6a660545a.jpg",
    "name": "Warden",
    "houseImg": "https://i.pinimg.com/originals/15/0f/2b/150f2b856ea49796ddd9d14cc7607a86.jpg",
    "house": "Hufflepuff",
    "expelled": true
  }, {
    "id": 15,
    "studentImg": "https://mymodernmet.com/wp/wp-content/uploads/2021/09/lui-ferreyra-geometric-portraits-10.jpg",
    "name": "Alexi",
    "houseImg": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d5z2f66-d8d9c79c-12d0-47e9-9d93-c36efb2bcbff.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__gryffindor_stripes_by_theladyavatar_d5z2f66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNXoyZjY2LWQ4ZDljNzljLTEyZDAtNDdlOS05ZDkzLWMzNmVmYjJiY2JmZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.i-630GtLeaEKfAMKHVrjq5FK8sOyzL1COwqoNjhnyzg",
    "house": "Gryffindor",
    "expelled": true
  }, {
    "id": 16,
    "studentImg": "https://www.thisiscolossal.com/wp-content/uploads/2016/12/lui-6.jpg",
    "name": "Hadria",
    "houseImg": "https://i.pinimg.com/originals/15/0f/2b/150f2b856ea49796ddd9d14cc7607a86.jpg",
    "house": "Hufflepuff",
    "expelled": true
  }, {
    "id": 17,
    "studentImg": "https://www.thisiscolossal.com/wp-content/uploads/2021/08/awear_drawing_FINAL.jpg",
    "name": "Anselm",
    "houseImg": "https://i.pinimg.com/originals/15/0f/2b/150f2b856ea49796ddd9d14cc7607a86.jpg",
    "house": "Hufflepuff",
    "expelled": true
  }, {
    "id": 18,
    "studentImg": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ed4493063889.5633967caf270.jpg",
    "name": "Abbie",
    "houseImg": "https://cdn.wallpapersafari.com/50/12/WVmuwa.jpg",
    "house": "Slytherin",
    "expelled": true
  }, {
    "id": 19,
    "studentImg": "https://www.thisiscolossal.com/wp-content/uploads/2021/08/Long_Neck_sq.jpg",
    "name": "Ryley",
    "houseImg": "https://i.pinimg.com/originals/15/0f/2b/150f2b856ea49796ddd9d14cc7607a86.jpg",
    "house": "Hufflepuff",
    "expelled": false
  }, {
    "id": 20,
    "studentImg": "https://images.squarespace-cdn.com/content/v1/50a079b1e4b081ffff7892b1/1526510265811-0J05RLXI8H6HF76OR211/18194706_1560029477354246_1415209368602032931_n.jpg",
    "name": "Jacklin",
    "houseImg": "https://i.pinimg.com/originals/15/0f/2b/150f2b856ea49796ddd9d14cc7607a86.jpg",
    "house": "Hufflepuff",
    "expelled": false
  }
];

export default students;
