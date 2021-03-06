import styled from 'styled-components'
import colors from '../../../../constants/colors'

export const Container = styled.header`
  align-items: center;
  height: 7vw;
  display: flex;
  padding: 0;
  max-height: 100px;
  padding: 0 2rem;
  width: 100%;
  background: #fff;
   @media (max-width: 800px) {
    padding: 0;
   }
   @media (min-width: 1000px) and (max-width: 1600px) {
    height: 4vw;
   }

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
   @media (max-width: 800px) {
    padding: 0 2rem;
   }
    @media (min-width: 1000px) and (max-width: 1600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0 2rem;
   }
  > ol {
      width: 100%;
      display: flex;
      justify-content:flex-end;
      align-items: flex-end;

      > li {
        color: ${colors.blue_hard};
        font-weight: 500;
        cursor: default;
      }
    }
  }
}
`
