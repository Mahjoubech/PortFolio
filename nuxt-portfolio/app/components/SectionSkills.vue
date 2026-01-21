<script setup>
const skillsData = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', percent: 80 },
      { name: 'CSS', percent: 70 },
      { name: 'JavaScript', percent: 70 },
      { name: 'Tailwind CSS', percent: 75 }
    ]
  },
  {
    title: 'Frameworks & Backend',
    items: [
      { name: 'React JS', percent: 40 },
      { name: 'Vue JS', percent: 50 },
      { name: 'PHP', percent: 82 },
      { name: 'Laravel', percent: 78 }
    ]
  },
  {
    title: 'Database & Others',
    items: [
      { name: 'SQL', percent: 80 },
      { name: 'PostgreSQL', percent: 80 },
      { name: 'Git & GitHub', percent: 82 },
      { name: 'REST API', percent: 62 }
    ]
  }
];
</script>

<template>
    <section id="skills" class="min-h-screen bg-navy-light px-[9%] py-[10rem]">
       <h2 class="text-[4.5rem] text-center mb-12">My <span class="text-teal">Skills</span></h2>
       
       <div class="flex flex-wrap justify-around gap-6 mb-16">
          <div v-for="(stat, index) in [{num: '14+', label: 'Technologies'}, {num: '1K+', label: 'Hours of Work'}, {num: '15+', label: 'Projects Completed'}]" :key="index"
               class="bg-navy p-10 rounded-2xl text-center flex-1 min-w-[200px] border border-teal/10 shadow-[0_0_10px_rgba(100,255,218,0.2)] hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(100,255,218,0.3)] transition-all duration-300">
             <h3 class="text-[4rem] text-teal mb-2">{{ stat.num }}</h3>
             <p class="text-[1.8rem] text-slate-lightest">{{ stat.label }}</p>
          </div>
       </div>

       <div class="flex flex-wrap gap-8 justify-between">
          <div v-for="(category, catIndex) in skillsData" :key="catIndex" 
               class="flex-1 min-w-[300px] p-8 bg-navy rounded-2xl shadow-[0_0_10px_rgba(100,255,218,0.2)]">
             <h3 class="text-[2.4rem] text-teal text-center mb-8">{{ category.title }}</h3>
             <div v-for="(skill, skillIndex) in category.items" :key="skillIndex" class="mb-6">
                <div class="flex justify-between mb-2 text-[1.7rem]">
                   <p>{{ skill.name }}</p>
                   <p class="text-teal">{{ skill.percent }}%</p>
                </div>
                <div class="w-full h-[10px] bg-white/10 rounded-full overflow-hidden relative progress-line">
                   <span class="absolute top-0 left-0 h-full bg-teal rounded-full origin-left transition-transform duration-[1500ms] scale-x-0" :style="{ width: skill.percent + '%' }"></span>
                </div>
             </div>
          </div>
       </div>
    </section>
</template>
