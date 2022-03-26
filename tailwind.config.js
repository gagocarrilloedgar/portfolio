const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gradientColorStops: {
        // https://coolors.co/2d00f7-6a00f4-8900f2-a100f2-b100e8-bc00dd-d100d1-db00b6-e500a4-f20089
        'gradient-1-start': '#4EF700',
        'gradient-1-end': '#66C639',
        'gradient-2-start': '#3FC776',
        'gradient-2-end': '#40AEC7',
        'gradient-3-start': '#4081C7',
        'gradient-3-end': '#6A40C7'
      },
      spacing: {
        '9/16': '56.25%'
      },
      fontSize: {
        '8.5xl': '7rem'
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem'
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gradient: {
          500: '#b5e48c',
          100: '#92ec00'
        },
        primary: {
          100: '#D9ED92',
          200: '#B5E48C',
          300: '#99D98C',
          400: '#76C893',
          500: '#52B69A',
          600: '#34A0A4',
          700: '#168AAD',
          800: '#1A759F',
          900: '#1E6091'
        },
        gray: { ...colors.stone, 900: '#041221', 800: '#233242' }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.800')} !important`
              },
              code: { color: theme('colors.primary.400') }
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900')
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900')
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900')
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900')
            },
            pre: {
              backgroundColor: theme('colors.gray.800')
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem'
            },
            'code::before': {
              content: 'none'
            },
            'code::after': {
              content: 'none'
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem'
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500')
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500')
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.500'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')} !important`
              },
              code: { color: theme('colors.primary.400') }
            },
            h1: {
              fontWeight: '800',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100')
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100')
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100')
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100')
            },
            pre: {
              backgroundColor: theme('colors.gray.800')
            },
            code: {
              backgroundColor: theme('colors.gray.800')
            },
            details: {
              backgroundColor: theme('colors.gray.800')
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400')
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400')
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100')
              }
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700')
            }
          }
        }
      }),
      keyframes: {
        shrink: {
          '0% , 100%': {
            height: '0.75rem'
          },
          '50%': {
            height: '0.375rem'
          }
        },
        expand: {
          '0% , 100%': {
            height: '0.375rem'
          },
          '50%': {
            height: '0.75rem'
          }
        },
        'gradient-foreground-1': {
          '0%, 16.667%, 100%': {
            opacity: 1
          },
          '33.333%, 83.333%': {
            opacity: 0
          }
        },
        'gradient-background-1': {
          '0%, 16.667%, 100%': {
            opacity: 0
          },
          '25%, 91.667%': {
            opacity: 1
          }
        },
        'gradient-foreground-2': {
          '0%, 100%': {
            opacity: 0
          },
          '33.333%, 50%': {
            opacity: 1
          },
          '16.667%, 66.667%': {
            opacity: 0
          }
        },
        'gradient-background-2': {
          '0%, to': {
            opacity: 1
          },
          '33.333%, 50%': {
            opacity: 0
          },
          '25%, 58.333%': {
            opacity: 1
          }
        },
        'gradient-foreground-3': {
          '0%, 50%, 100%': {
            opacity: 0
          },
          '66.667%, 83.333%': {
            opacity: 1
          }
        },
        'gradient-background-3': {
          '0%, 58.333%, 91.667%, 100%': {
            opacity: 1
          },
          '66.667%, 83.333%': {
            opacity: 0
          }
        }
      },
      animation: {
        shrink: 'shrink 1.5s infinite',
        expand: 'expand 1.5s infinite',
        'gradient-background-1': 'gradient-background-1 8s infinite',
        'gradient-foreground-1': 'gradient-foreground-1 8s infinite',
        'gradient-background-2': 'gradient-background-2 8s infinite',
        'gradient-foreground-2': 'gradient-foreground-2 8s infinite',
        'gradient-background-3': 'gradient-background-3 8s infinite',
        'gradient-foreground-3': 'gradient-foreground-3 8s infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()'
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    })
  ]
}
