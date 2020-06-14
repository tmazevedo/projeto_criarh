import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 40px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 100%;
  // margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav{
    display: flex;
    align-items: center;

    img{
      height: 20px;
      margin-left: 0%;
      // padding-left:70%;
      // border-left: 1px solid #eee;
    }

    a{
      // font-weight:bold;
      color: black;
      // padding-left: 20px;
      margin-left: 30%;
      // border-left: 1px solid #eee;
    }
`;

export const Logar = styled.div`
  display: flex;
  align-items: center;
  div{
    align-items: center;
    a{
      padding-left: 20px;
      padding-right: 20px;
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
      font-weight:bold;
      margin-top: 2px;
      // font-size: 16px;
      color: black;
    }
  }

`;

// export const Profile = styled.div`
// display: flex;
// margin-left: 20px;
// padding-left: 20px;border-left: 1px solid #eee;

// div{
//   text-align:right;
//   margin-right: 10px;

//   strong{
//     display: block;
//     color #333;
//   }

//   a{
//     display:block;
//     margin-top: 2px;
//     font-size: 12px;
//     color #999;
//   }
// }

// img{
//   height: 32px;
//   border-radius: 50%;
// }

// `;