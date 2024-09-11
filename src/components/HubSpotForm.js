import React, { useEffect } from 'react'

const HubSpotForm = ({
  portalId,
  formId,
  targetId,
  region = 'na1',
  cssClass = 'light-mode'
}) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          target: `#${targetId}`,
          region,
          cssClass,
          onFormReady: function ($form) {
            const iframe = document.querySelector('iframe')
            if (iframe) {
              const observer = new MutationObserver(
                (mutationsList, observer) => {
                  for (const mutation of mutationsList) {
                    if (
                      mutation.type === 'childList' &&
                      iframe.contentDocument
                    ) {
                      const doc =
                        iframe.contentDocument ||
                        iframe.contentWindow?.document
                      if (doc) {
                        // Set the background color of the iframe's body
                        doc.body.style.backgroundColor = '#040607'

                        const labels = doc.querySelectorAll('label')
                        labels.forEach((label) => {
                          label.style.color = '#ffffff'
                        })
                        observer.disconnect() // Stop observing after labels and background are adjusted
                      }
                    }
                  }
                }
              )

              observer.observe(iframe.contentDocument, {
                childList: true,
                subtree: true
              })
            } else {
              console.error('Iframe not found.')
            }
          }
        })
      } else {
        console.error('hbspt not available.')
      }
    })

    script.addEventListener('error', () => {
      console.error('Failed to load the script.')
    })
  }, [portalId, formId, targetId, region, cssClass])

  return <div id={targetId} />
}

export default HubSpotForm