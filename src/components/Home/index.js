import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => (
  <div className="home-container">
    <div className="sub-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile-image"
      />
      <h1 className="name">Wade Warren</h1>
      <p className="designation">Software developer at UK</p>
    </div>
    <ul className="blogsList-container">
      {blogsList.map(each => (
        <li key={each.id}>
          <div className="title-container">
            <h1 className="title">{each.title}</h1>
            <p className="date">{each.publishedDate}</p>
          </div>
          <p className="description">{each.description}</p>
          <hr className={`horizontal-line line${each.id}`} />
        </li>
      ))}
    </ul>
  </div>
)

export default Home
