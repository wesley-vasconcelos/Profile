<template>
   <div class="d-flex justify-space-between flex-wrap ">
    <div class="flex-column flex-wrap " style="width: 60%;">
      <div class="d-flex flex-wrap ">
        <img class="img-profile" src="../../public//img/img-profile.jpg"/>
        <div class="flex-column profile-name-section">
          <h1>
            Wesley vasconcelos
          </h1>
          <h2>
            Software Developer
          </h2>
        </div>
      </div>
      <div>
        <div class="flex-column text-left" style="padding-top: 40px;">
          <h3>
            Resumo
          </h3>
          <h2 style="max-width: 500px;">
            Profissional com ótima capacidade de comunicação e bons conhecimentos. Capaz de auxiliar na rotina diária e oferecer um
            serviço de qualidade, buscando soluções aos problemas apresentados.
          </h2>
        </div>
      </div>
    </div>

      <div style="width: 40%;">
        <div class="flex-column">
          <h3 class="text-left" style="text-align: left;">
            Linguagens
          </h3>
          <h2>
            Português BR Nativo 
          </h2>
          <br />
          <br />
          <h3 class="text-left" style="text-align: left;">
            Educação
          </h3>
          <h2>
            CS50X
          </h2>
          <span>
            Harvard University
          </span>
          <h2>
            Análise e Desenvolvimento de Sistemas
          </h2>
          <span>
            Universidade Cruzeiro do Sul
          </span>
          <br />

          <button @click="downloadPDF">Baixe meu curriculo em PDF!</button>
        </div>
        
      </div>
   </div>
</template>

<script>
import file from '../../public/doc/CV-2023-att.pdf'
export default {
  name: 'HelloWorld',
  components: {
  },
  props: {
    msg: String
  },
  setup() {
    const downloadPDF = () => {
      // Substitua 'seuarquivo.pdf' pelo caminho do seu arquivo PDF
      const arquivoPDF = file;

      // Crie um link temporário
      const link = document.createElement('a');
      link.href = arquivoPDF;

      // Defina o atributo "download" para indicar que é um download
      link.setAttribute('download', '');

      // Simule um clique no link para iniciar o download
      link.click();
    };

    return {
      downloadPDF,
    };
  },
}
</script>

<style scoped>
  .img-profile{
    width: 221px;
    height: 222px;
    top: 71px;
    left: 60px;
    border-radius: 400px;
    border: 1px;
    background-color: white;
  }
  .profile-name-section{
    padding-left: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
