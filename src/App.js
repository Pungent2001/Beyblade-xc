import logo from './logo.svg';
import './App.css';

function BeyPartFrameSmall(partName, partType, partImage) {
	return (
		<div class="bey-part-frame-small">
			<colgroup width="100%" height="100%">
			<img src={partImage} alt={partName} class="bey-part-image-small"></img>
			<div class="bey-part-name-small">{partName}</div>
			</colgroup>
			
		</div>
	);
}
function App() {
  return (
    <div className="App">
	<head>
		<title>Beyblade X Companion</title>
		<link rel="stylesheet" type="text/css" href="App.css"></link>
	</head>
	<body>
		<div class="global-container">
			<div class="login-container">
				<img src="images\BXlogo.png" alt="Beyblade X Companion" class="logo" width="100%"></img>
				<div>
					<input type="text" class="text-input"></input>
					<label class="input-label">Username</label>
				</div>
				<div>
					<input type="text" class="text-input"></input>
					<label class="input-label">Password</label>
				</div>
					<button class="login-button">Login</button>
			</div>
		</div>
	</body>
    </div>
  );
}

export default App;
