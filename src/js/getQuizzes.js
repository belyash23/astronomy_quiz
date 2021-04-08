function importAll (r) {
	let quizzes = {};

  r.keys().forEach(key => {
  	const name = r(key).default.name;
  	const obj = r(key).default;
  	quizzes[name] = obj;
  });

  return quizzes;
}

const quizzes = importAll(require.context('Quizzes/', true, /\.js$/));

export default quizzes;