import React, {Component} from 'react';
import PhotoContainer from './PhotoContainer'
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      photos: [],
      endDate: new Date()
    };
  }

  fetchData = (endDate) => {
    let endDateFormatted = endDate.toISOString().split('T')[0];
    let startDate = endDate;
    startDate.setDate(startDate.getDate() - 6);
    let startDateFormatted = startDate.toISOString().split('T')[0];

    let apodUrl = `https://api.nasa.gov/planetary/apod?api_key=lpBBcxqxRfI6s9qSJg7NKcTh1BUxwfEq5YAd8Iby&thumbs=True&start_date=${startDateFormatted}&end_date=${endDateFormatted}`;

    fetch(apodUrl)
    .then(
      res => {
        if (!res.ok) {
          throw Error('Error fetching a subsection of planet photos');
        }
        return res.json()
        .then(
          data => {
            data = data.reverse()
            this.setState({
              loading: false,
              photos: [...this.state.photos, ...data]
            })
          }
        )
      }
    )
  }

  infiniteScroll = () => {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    let modifier = 250; // when the user is [modifier]px from the bottom, fire the event
    if(currentScroll + modifier > documentHeight) {
      let newEndDate = this.state.endDate;
      newEndDate.setDate(newEndDate.getDate() - 1);
      this.setState({
        endDate: newEndDate
      });


      this.fetchData(newEndDate);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.infiniteScroll);
    this.fetchData(this.state.endDate);
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

    <Box className="App" px={{xs: 7, sm: 15}} py={10}>
      <PhotoContainer photos={this.state.photos}></PhotoContainer>

      {
        this.state.endDate >= new Date("June 16 1995") && 
        <Grid container p={5}
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
          <Grid item sx={{ width: '100%' }}>
            <LinearProgress color="secondary"/>
          </Grid>
        </Grid>
      }
      
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