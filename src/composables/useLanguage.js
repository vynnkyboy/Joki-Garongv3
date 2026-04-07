import { ref, reactive, computed } from 'vue'
import { translations } from '../data/translations'

const currentLang = ref('id')
const languageOrder = ['id', 'en', 'jp', 'pt']

// Load saved language
const savedLang = localStorage.getItem('joki_lang')
if (savedLang && languageOrder.includes(savedLang)) {
  currentLang.value = savedLang
}

export function useLanguage() {
  const t = (key) => {
    return translations[currentLang.value]?.[key] || translations['id'][key] || key
  }
  
  const toggleLanguage = () => {
    const currentIndex = languageOrder.indexOf(currentLang.value)
    const nextIndex = (currentIndex + 1) % languageOrder.length
    currentLang.value = languageOrder[nextIndex]
    localStorage.setItem('joki_lang', currentLang.value)
    
    // Trigger custom event for reactive updates
    window.dispatchEvent(new CustomEvent('language-changed', { detail: currentLang.value }))
  }
  
  return {
    currentLang,
    t,
    toggleLanguage
  }
}