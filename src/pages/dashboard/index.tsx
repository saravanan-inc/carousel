import React from 'react'
import styled from 'styled-components';
import { server } from '../../utils/axios';

function Dashboard() {
  const [carousels, setCarousels] = React.useState<any>([])
  const [index, setIndex] = React.useState(0)
  
  React.useEffect(() => {
    async function getCarousels() {
      const { data: { carousel_images } } = await server.get("carousel");
      setCarousels(carousel_images)
    }
    getCarousels();
  }, [])

  const showPrevious = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIndex((index+1)%carousels.length)
  }

  const showNext = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    return setIndex(index === 0 ? carousels.length-1 : index-1)
  }
  return (
    <>
      <Container>
        <Previous>
          <button onClick={showPrevious}>&#10162;</button>
        </Previous>
        <Content>
          <img src={carousels[index]?.image_link} alt={carousels[index]?.title} />
          <img src={carousels[(index+1)%carousels.length]?.image_link} alt={carousels[index]?.title} />
        </Content>
        <Next>
          <button onClick={showNext}>&#10162;</button>
        </Next>
      </Container>

      <DotButton>
        <span data-active={index < 1 ? "1" : "0"}></span>
        <span data-active={index > 1 ? "1" : "0"}></span>
      </DotButton>
    </>
  )
}

export default Dashboard;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  background-color: #747E7E;
  border-radius: 1rem;

  button {
    background-color: #747E7E;
    border: none;
    font-size: 2rem;
    border-radius: 50%;
    padding: .2rem .6rem;
  }
`

const Content = styled.div`
  display: flex;
  -webkit-transition: all 3s 0s ease;
  -moz-transition: all 3s 0s ease;
  -o-transition: all 3s 0s ease;
  transition: all 3s 0s ease;

  img {
    width: 49%;
    border-radius: 1rem;
    margin: .5%;
    object-fit: contain;
    aspect-ratio: 16/9;
    height: 350px;
    animation: fadeIn 5s; 
    transition: cubic-bezier(1, 0, 0, 1);
    border-radius: 14px;
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow:  5px 5px 100px #5a5a5a,
                -5px -5px 100px #ffffff;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`

const Previous = styled.div`
  position: absolute;
  left: 0;

  button {
    transform: rotate(180deg);
  }
`

const Next = styled.div`
  position: absolute;
  right: 0;
`

const DotButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .5rem;
  
  span {
    width: .5rem;
    height: .5rem;
    background-color: #747E7E;
    margin-right: .2rem;
    border-radius: 50%;
  }

  [data-active="1"] {
    width: 1.5rem;
    border-radius: 1rem;
  }
`