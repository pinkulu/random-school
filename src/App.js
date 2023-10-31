import { useState } from "react";
import "./App.css"
import styles from "./App.module.css"
function App() {

  const [translations, setTranslation] = useState([
    [
      [
        "feature",
      ],
      [
        "funkcionalitāte",
        "fīča",
        "funkcionals iezimes"
      ]
    ],
    [
      [
        "background"
      ],
      [
        "situacija",
        "konteksts"
      ]
    ],
    [
      [
        "scenario"
      ],
      [
        "Piemērs",
        "Scenārijs"
      ]
    ],
    [
      [
        "scenarioOutline"
      ],
      [
        "Scenārijs pēc parauga"
      ]
    ],
    [
      [
        "examples"
      ],
      [
        "Paraugs",
        "Piemērs"
      ]
    ],
    [
      [
        "given"
      ],
      [
        "*",
        "Kad"
      ]
    ],
    [
      [
        "when"
      ],
      [
        "*",
        "Ja"
      ]
    ],
    [
      [
        "then"
      ],
      [
        "*",
        "Tad"
      ]
    ],
    [
      [
        "and"
      ],
      [
        "*",
        "Un"
      ]
    ],
    [
      [
        "but"
      ],
      [
        "*",
        "Bet"
      ]
    ],
    [
      [
        "rule"
      ],
      [
        "Rule",
      ]
    ],
    [
      [
        "or"
      ],
      [
        "Vai"
      ]
    ]
  ]
  )

  const mixup = () => {
    // make the table random
    let newTranslations = [...translations]
    for (let i = newTranslations.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTranslations[i], newTranslations[j]] = [newTranslations[j], newTranslations[i]];
    }
    setTranslation(newTranslations)
    document.body.style.cursor = cursorOptions[Math.floor(Math.random() * cursorOptions.length)]

  }

  const cursorOptions = [
    "context-menu",
    "help",
    "pointer",
    "progress",
    "wait",
    "cell",
    "crosshair",
    "text",
    "vertical-text",
    "alias",
    "copy",
    "move",
    "no-drop",
    "not-allowed",
    "grab",
    "grabbing",
    "all-scroll",
    "col-resize",
    "row-resize",
    "n-resize",
    "e-resize",
    "s-resize",
    "w-resize",
    "ne-resize",
    "nw-resize",
    "se-resize",
    "sw-resize",
    "ew-resize",
    "ns-resize",
    "nesw-resize",
    "nwse-resize",
    "zoom-in",
    "zoom-out",
  ]

  return (
    <div className={styles.main}>
      <h1>yupie :3c</h1>
      <table className={styles.table}>
        <tr>
          <th>English</th>
          <th>Latviešu</th>
        </tr>
        {
          translations.map((translation) => {
            return (
              <tr>
                {
                  translation.map((word) => {
                    return (
                      <td onClick={
                        () => mixup()
                      }>
                        {
                          word.map((variant) => {
                            return (
                              <div className={styles.variants}>
                                {variant}{variant === word[word.length - 1] ? "" : ","}
                              </div>
                            )
                          })
                        }
                      </td>
                    )
                  })
                }
              </tr>
            )
          }
          )
        }
      </table>
    </div>
  );
}

export default App;
