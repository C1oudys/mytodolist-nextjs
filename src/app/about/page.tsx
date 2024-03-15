import React from 'react';
import { CompanyInfo } from '../types';

async function AboutPage() {
  const response = await fetch(`http://localhost:4000/companyInfo`);
  const company: CompanyInfo = await response.json();
  const { name, description, image } = company;
  
  return (
    <main>
        <h1 className="text-2xl mb-6">회사 소개</h1>
        <div>
          <img src={image} alt="회사 이미지" />
        </div>
        <div className="flex flex-col text-center">
          <p >{name}</p>
          <p >
            {description}
          </p>
        </div>
    </main>
  );
}

export default AboutPage;