<script setup>
// Root layout: a fixed nav, then every page section stacked in scroll order,
// then the footer. Each section's `id` matches an entry in `navLinks` (cv.js).
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import AwardsSection from './components/AwardsSection.vue'
</script>

<template>
  <TheNav />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <CertificatesSection />
    <AwardsSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>
