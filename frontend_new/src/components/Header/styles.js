import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav{
    display: flex;
    align-items: center;

    img{
      height: 20px;
      margin-left: 20px;
      padding-left:70%;
      border-left: 1px solid #eee;
    }

    a{
      font-weight:bold;
      color: #7159c1;
      padding-left: 20px;
      margin-left: 20%;
      border-left: 1px solid #eee;
    }

    aside{
      display: flex;
      align-items: center;
    }
`;

export const Profile = styled.div`
display: flex;
margin-left: 20px;
padding-left: 20px;border-left: 1px solid #eee;

div{
  text-align:right;
  margin-right: 10px;

  strong{
    display: block;
    color #333;
  }

  a{
    display:block;
    margin-top: 2px;
    font-size: 12px;
    color #999;
  }
}

img{
  height: 32px;
  border-radius: 50%;
}

`;