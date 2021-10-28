<script>
  import html2canvas from 'html2canvas'
  import ExportPNG from './ExportPNG.svelte'

  export const exportPng = () => {
    const element = document.getElementById('MMGameContainer')
    html2canvas(element).then((canvas) => {
      const link = document.getElementById('hidden-download-link')
      const title = document.getElementsByClassName('MMSessionTitle')[0].value

      link.setAttribute(
        'download',
        title ? `${title}.png` : 'MovingMotivator.png'
      )
      link.setAttribute(
        'href',
        canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      )
      link.click()
    })
  }
</script>

<a id="hidden-download-link">Download</a>
<ExportPNG
  on:click={() => {
    exportPng()
  }}
/>

<style>
  #hidden-download-link {
    display: none;
  }
</style>
