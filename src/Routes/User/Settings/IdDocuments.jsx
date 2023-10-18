import React from 'react'
import styled from 'styled-components';
import Userlayout from '../../../reuseables/Userlayout';
import { CenterElement } from '../../../styles/CenterEle';
// 
import search from '../../../assets/search.svg';
import add from '../../../assets/add.svg';

const IdDocuments = () => {
  return (
    <Userlayout useBack={true}>
      <CenterElement>
        <SearchandAdd>
          <div className="search">
          <img src={search} alt="" />
          <input type="text" placeholder="Search documents" />
          </div>
          <div className="add">
            <img src={add} alt="" />
          </div>
        </SearchandAdd>
      <IdDocumentsBox>
      </IdDocumentsBox>      
        
      </CenterElement>
    </Userlayout>

  )
}

export default IdDocuments;

const SearchandAdd = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  .search{
    border-radius: 29px;
    border: 1px solid #EAEBEF;  
    background: #FBFBFB;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 200px;
    padding: 0 7px;
    height: 40px;
    img{
      width: 13px;
    }
    input{
      background: inherit;
      border: none;
      outline: none;
      color: black;
      font-size: 12px;
      font-weight: 400;
      width: 150px;
      &::placeholder{
        font-size: 12px;
        color: #AAA;
      }
    }
  }
  .add{
    img{
      width: 20px;
    }
  }
`;

const IdDocumentsBox = styled.div`

`;
