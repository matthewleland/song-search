function About() {
  return (
    <>
      <h1 className='text-4xl mb-4'>Spotify Song Search</h1>
      <p className='mb-4 text-xl font-light'>
        A React app to search songs on Spotify and view details, lyrics, and artist information.
        This project was inspired by the
        {' '}
        <a className='hover:underline hover:text-primary-content' href='https://github.com/bradtraversy/github-finder-app'>
        Github Finder
        </a>{' project found in the '}
        <a className='hover:underline hover:text-primary-content' href='https://www.udemy.com/course/modern-react-front-to-back/'>
          React Front To Back
        </a>{' '}
        Udemy course by{' '} 
        <a className='hover:underline hover:text-primary-content' href='https://traversymedia.com'>Brad Traversy</a>
        .
      </p>
      <p className='mb-4 text-xl font-light'>
        Song Search was developed by{' '}
        <a className='text-primary-content font-bold hover:underline hover:text-primary-content' href='https://github.com/matthewleland'>Matthew Leland</a>.
        This application is for educational purposes only and is not intended for commercial use.
      </p>
      <p className='text-lg text-primary-content'>
        Version <span className='font-bold text-white'>1.0.0</span>
      </p>
    </>
  )
}

export default About