// // const express = require("express");
// // const morgan = require("morgan");
// // const postBank = require("./postBank");
// // const app = express();

// module.exports.singlepost = app.get('/posts/:id', (req, res) => {
//     const id = req.params.id;
//     const post = postBank.find(id);

//     const html = `<!DOCTYPE html>
//   <html>
//   <head>
//     <title>Wizard News</title>
//     <link rel="stylesheet" href="/style.css" />
//   </head>
//   <body>
//     <div class="news-list">
//       <header><img src="/logo.png"/>Wizard News</header>
//         <div class='news-item'>
//           <p>
//             ${post.title}
//             <small>(by ${post.name})</small>
//           </p>
//           <p>
//             ${post.content}
//           </p>
//         </div>
//     </div>
//   </body>
// </html>`

//     res.send(html);
// });

// // const PORT = 1337;

// // app.listen(PORT, () => {
// //   console.log(`App listening in port ${PORT}`);
// // });


