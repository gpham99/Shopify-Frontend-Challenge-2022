import React, {Component} from 'react';
import PhotoContainer from './PhotoContainer'
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      photos: []
    };
  }

  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=''&thumbs=True&start_date=2022-1-1&end_date=2022-1-19")
    .then(
      response => {
        console.log('response', response);
        if (!response.ok) {
          throw Error('Error fetching planet photos');
        }
        return response.json()
        .then(allData => {
          console.log('allData', allData)
          this.setState({
            loading: false,
            photos: allData 
          });
        })
        .catch(err => {
          throw Error(err.message);
        })
      }
    )
  }
  
  render() {
    return (
    <>
    <header>
      <Box px={{xs: 3, sm: 10}} py={{xs: 5, sm: 5}} bgcolor="primary.main" color="white">
          <Container maxWidth="lg">
            <Typography component="div">
              <h1>Spacetagram</h1>
              <p>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
            </Typography>
          </Container>
      </Box>
    </header>

    {this.state.loading &&
      <Box sx={{ width: '100%' }}>
      <LinearProgress color="secondary"/>
    </Box>
    }

    <Box className="App" px={{xs: 7, sm: 15}} py={10}>
      <PhotoContainer photos={this.state.photos}></PhotoContainer>
    </Box>

    {!this.state.loading && 
    <footer>
      <Box px={{xs: 3, sm: 10}} py={{xs: 5, sm: 5}} bgcolor="info.main" color="white" textAlign="center">
          Giang Pham &reg; {new Date().getFullYear()}
      </Box>
    </footer>
    }
    </>
    );
  }
}

export default App;