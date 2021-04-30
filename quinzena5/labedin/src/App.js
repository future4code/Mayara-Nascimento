import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://mayaracristina.com.br/wp-content/uploads/2021/04/@mayara.dsgn_-1.png" 
          nome="Mayara Cristina" 
          descricao="Oi, eu sou o Mayara. Tenho 24 anos. E trabalho como Design para um agência imobiliária. Atualmente estudo desenvolvimento front-end com React na Labenu."
        />
        
        <ImagemButton 
          imagem="https://mayaracristina.com.br/wp-content/uploads/2021/04/@mayara.dsgn_-1.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Endereço</h2>
        <CardGrande 
          nome="Estados, Balneário Camboriú, SC" 
          descricao="Telefone: +55 47 5555-5555" 
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.conteudoinboundmarketing.com.br/wp-content/uploads/2019/07/iStock-984636634-1024x724.jpg" 
          nome="Caio" 
          descricao="Aprendendo" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Os três mosquiteiros" 
          descricao="Em busca do tesouro perdido" 
        />

        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Dragons" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

    
      </div>
    </div>
  );
}

export default App;
