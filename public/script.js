/**
 * Oakline Realty — Interactive JavaScript
 * Premium Real Estate Brand Architecture (Austin, Texas)
 * Vanilla JS + Bootstrap 5 Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Property Data Store (6 Curated Austin Residences with Multi-Photo Galleries) ---
  const sampleProperties = [
    {
      id: 'prop-1',
      title: 'The Westlake Modern Sanctuary',
      address: '4102 Rolling Green Way, Westlake Hills, Austin, TX 78746',
      price: '$2,450,000',
      numericPrice: 2450000,
      location: 'westlake',
      locationName: 'Westlake Hills',
      type: 'single-family',
      typeName: 'Single-Family Residence',
      beds: 4,
      baths: 4.5,
      sqft: '3,820 sq ft',
      yearBuilt: 2023,
      schoolDistrict: 'Eanes ISD (Barton Creek Elem, Westlake High)',
      description: 'Nestled into the rolling limestone topography of Westlake Hills, this custom architectural sanctuary features floor-to-ceiling glass, native Texas limestone masonry, and an infinity-edge pool overlooking protected Hill Country greenbelt views. Designed for indoor-outdoor entertaining with a chef\'s kitchen and private master wing.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          title: 'Front Elevation & Negative-Edge Reflection Pool'
        },
        {
          url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
          title: 'Floor-to-Ceiling Glass Great Room with Panoramic Hill Country Views'
        },
        {
          url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
          title: 'Chef\'s Kitchen with Waterfall Quartzite Island & Thermador Suite'
        },
        {
          url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
          title: 'Primary Wing Retreat with Spa Bath & Private Cedar Terrace'
        }
      ],
      features: [
        'Custom Texas limestone masonry and western cedar accents',
        'Infinity-edge swimming pool with Hill Country canyon views',
        'Chef\'s kitchen with waterfall quartzite island and Thermador suite',
        'Covered outdoor terrace with built-in gas grill & outdoor fireplace',
        'Primary retreat with dual walk-in dressing rooms & soaking tub',
        'Top-rated Eanes Independent School District'
      ]
    },
    {
      id: 'prop-2',
      title: 'The Skyline Penthouse at Lady Bird Lake',
      address: '70 Rainey Street #2804, Downtown Austin, TX 78701',
      price: '$1,875,000',
      numericPrice: 1875000,
      location: 'downtown',
      locationName: 'Downtown Austin',
      type: 'luxury-condo',
      typeName: 'Luxury High-Rise Condo',
      beds: 2,
      baths: 2.5,
      sqft: '2,150 sq ft',
      yearBuilt: 2021,
      schoolDistrict: 'Austin ISD (Mathews Elem, Austin High)',
      description: 'Perched on the 28th floor in the heart of Downtown Austin\'s Rainey Historic District, this light-flooded corner penthouse commands panoramic 270-degree vistas of Lady Bird Lake and the downtown skyline. Experience unmatched walkability to Ann & Roy Butler Hike-and-Bike Trail, world-class dining, and 24/7 concierge amenities.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
          title: 'Skyline Penthouse Balcony Overlooking Lady Bird Lake'
        },
        {
          url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
          title: 'Open Living & Dining Salon with Motorized Architectural Shades'
        },
        {
          url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
          title: 'European White Oak Kitchen with Integrated Sub-Zero Appliances'
        },
        {
          url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
          title: 'Corner Master Suite with Sunset Skyline Views'
        }
      ],
      features: [
        'Expansive 270-degree views of Lady Bird Lake & Austin skyline',
        'Wrap-around sunset terrace with glass balustrade',
        '10-foot ceilings with motorized Lutron architectural shades',
        'Sub-Zero and Wolf appliances with European white oak cabinetry',
        '24/7 concierge, private plunge pool, and dedicated parking spaces',
        'Direct access to Ann & Roy Butler Hike-and-Bike Trail'
      ]
    },
    {
      id: 'prop-3',
      title: 'The Bouldin Creek Artisan Craftsman',
      address: '1408 South 3rd Street, South Austin, TX 78704',
      price: '$1,295,000',
      numericPrice: 1295000,
      location: 'bouldin',
      locationName: 'South Congress / Bouldin',
      type: 'modern-townhome',
      typeName: 'Modern Craftsman Residence',
      beds: 3,
      baths: 3.0,
      sqft: '2,410 sq ft',
      yearBuilt: 2022,
      schoolDistrict: 'Austin ISD (Becker Elem, Travis High)',
      description: 'A striking blend of organic Texas warmth and contemporary craft in vibrant 78704. Steps from South Congress and South First cafes, this home boasts vaulted tongue-and-groove ceilings, a secluded xeriscaped courtyard with native flowering agave, and a flexible detached studio ideal for remote work or guest quarters.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
          title: 'Modern Austin Craftsman Façade with Western Red Cedar Accents'
        },
        {
          url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
          title: 'Vaulted Living Room with Warm Hardwoods & Clerestory Windows'
        },
        {
          url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
          title: 'Artisan Kitchen with Custom Terrazzo & Matte Black Hardware'
        },
        {
          url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
          title: 'Sunlit Primary Bedroom Overlooking Private Agave Courtyard'
        }
      ],
      features: [
        'Walkable lifestyle in iconic Bouldin Creek / South Congress',
        'Detached private 280 sq ft flex studio / home office / ADU',
        'Vaulted tongue-and-groove pine ceilings with clerestory windows',
        'Low-water native Texas landscaping with heritage live oak canopy',
        'Pre-wired Level 2 EV charging & rooftop solar array readiness',
        'Energy Star certified high-efficiency climate zones'
      ]
    },
    {
      id: 'prop-4',
      title: 'The Barton Creek Spanish Oaks Villa',
      address: '8812 Spanish Oaks Club Blvd, Barton Creek, Austin, TX 78735',
      price: '$3,150,000',
      numericPrice: 3150000,
      location: 'barton-creek',
      locationName: 'Barton Creek / Spanish Oaks',
      type: 'single-family',
      typeName: 'Spanish Oaks Estate Villa',
      beds: 5,
      baths: 5.5,
      sqft: '5,120 sq ft',
      yearBuilt: 2020,
      schoolDistrict: 'Austin ISD / Private Academy Corridor',
      description: 'Behind the 24-hour guarded gates of Spanish Oaks, this transitional Hill Country estate borders protected preserve acreage. Featuring a dramatic double-height great room, climate-controlled 600-bottle wine room, multi-tiered resort pool with swim-up baja shelf, and private cart path to the championship golf club.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
          title: 'Resort Villa Architecture with Spanish Tile & Limestone Arches'
        },
        {
          url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
          title: 'Grand Hall with Hand-Hewn Timber Trusses & Limestone Fireplace'
        },
        {
          url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
          title: 'Commercial Culinary Suite with Dual Islands & Butler Pantry'
        },
        {
          url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
          title: 'Owner\'s Sanctuary with Heated Floors & Private Loggia'
        }
      ],
      features: [
        '24/7 guarded private enclave adjacent to Balcones Canyonlands',
        'Resort-style infinity pool, spa, and outdoor cabana kitchen',
        'Dedicated 600-bottle temperature-controlled wine room',
        'Private 4-car motor court with golf cart bay',
        'Direct cart connectivity to Spanish Oaks Golf Club',
        'Custom automated security and whole-home Lutron automation'
      ]
    },
    {
      id: 'prop-5',
      title: 'The Clarksville Historic Heritage Estate',
      address: '1714 West 10th Street, Clarksville, Austin, TX 78703',
      price: '$1,780,000',
      numericPrice: 1780000,
      location: 'clarksville',
      locationName: 'Clarksville & Old West Austin',
      type: 'single-family',
      typeName: 'Historic Craftsman Estate',
      beds: 4,
      baths: 3.5,
      sqft: '3,240 sq ft',
      yearBuilt: 2019,
      schoolDistrict: 'Austin ISD (Mathews Elem, O. Henry Middle)',
      description: 'A masterwork of historical restoration and contemporary expansion in storied Clarksville. Preserving authentic 1920s architectural millwork alongside modern steel-cased French doors, this property offers a shaded wraparound porch, antique reclaimed brick patio, and effortless strolls to neighborhood bistros.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1200&q=80',
          title: 'Restored Clarksville Heritage Façade & Wraparound Porch'
        },
        {
          url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
          title: 'Airy Library & Living Room with Restored Original Fireplace'
        },
        {
          url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
          title: 'Farmhouse Culinary Kitchen with Soapstone Counters & La Cornue Range'
        },
        {
          url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
          title: 'Upper-Level Primary Suite with Shiplap Walls & Clawfoot Tub'
        }
      ],
      features: [
        'Historic Clarksville designation with restored 1920s craftsmanship',
        'Spacious wraparound porch overlooking mature pecan trees',
        'Chef\'s kitchen with French La Cornue range & custom cabinetry',
        'Private rear courtyard with antique Austin brick pavers',
        'Walking distance to Jeffrey\'s, Medici Coffee, and Clark\'s Oyster Bar',
        'Minutes to Lady Bird Lake and Downtown Austin financial core'
      ]
    },
    {
      id: 'prop-6',
      title: 'The Mueller Modern Courtyard Residence',
      address: '4210 Robert Browning Street, Mueller, Austin, TX 78723',
      price: '$965,000',
      numericPrice: 965000,
      location: 'mueller',
      locationName: 'Mueller & East Austin',
      type: 'modern-townhome',
      typeName: 'Modern Courtyard Townhome',
      beds: 3,
      baths: 2.5,
      sqft: '2,280 sq ft',
      yearBuilt: 2022,
      schoolDistrict: 'Austin ISD (Blanton Elem, McCallum High)',
      description: 'LEED Platinum certified sustainable residence located on a tree-lined greenway in Austin\'s premier master-planned community. Featuring high-performance passive solar architecture, an enclosed interior courtyard, a dedicated home office, and direct access to Mueller Lake Park and the Sunday Farmer\'s Market.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80',
          title: 'Mueller Eco-Modern Front Façade on Shaded Greenway'
        },
        {
          url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
          title: 'Open Living Pavilion with Polished Concrete Floors'
        },
        {
          url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
          title: 'Scandinavian Minimalist Kitchen with Induction Cooktop'
        },
        {
          url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
          title: 'Tranquil Master Suite Opening to Second-Floor Cedar Balcony'
        }
      ],
      features: [
        'Austin Energy Green Building 5-Star & LEED Platinum certified',
        'Interior private courtyard connecting indoor-outdoor living',
        'Polished aggregate concrete floors & continuous fresh-air ERV system',
        'Solar photovoltaic system yielding net-zero electric bills',
        'Steps to Mueller Lake Park, amphitheater, and weekly farmer\'s market',
        'Rear-loading 2-car garage with installed Tesla EV charger'
      ]
    }
  ];

  // --- 2. Sticky Navbar Scroll State & Back to Top ---
  const siteHeader = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (siteHeader) {
      if (scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const mainHeading = document.querySelector('h1');
      if (mainHeading) {
        mainHeading.setAttribute('tabindex', '-1');
        mainHeading.focus({ preventScroll: true });
      }
    });
  }

  // --- 3. Mobile Navigation Auto-Collapse & Keyboard Dismissal ---
  const navbarCollapse = document.getElementById('navbarMain');
  const navLinks = document.querySelectorAll('.nav-link-custom');
  const navToggler = document.querySelector('.navbar-toggler-custom');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
        if (navToggler) navToggler.focus();
      }
    }
  });

  // --- 4. Comprehensive Property Search & Filtering Interface ---
  const searchLocationSelect = document.getElementById('searchLocationSelect');
  const searchTypeSelect = document.getElementById('searchTypeSelect');
  const searchPriceSelect = document.getElementById('searchPriceSelect');
  const searchBedSelect = document.getElementById('searchBedSelect');
  const searchSubmitBtn = document.getElementById('searchSubmitBtn');
  const searchResetBtn = document.getElementById('searchResetBtn');

  const filterTabs = document.querySelectorAll('[data-property-filter]');
  const propertyCards = document.querySelectorAll('.property-item-col');
  const filterCountEl = document.getElementById('propertyCountFeedback');
  const noPropertiesFoundEl = document.getElementById('noPropertiesFound');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Active filter state
  let currentFilters = {
    location: 'all',
    type: 'all',
    price: 'all',
    beds: 'all'
  };

  const applyCombinedFilters = () => {
    let visibleCount = 0;

    propertyCards.forEach(card => {
      const cardType = card.getAttribute('data-type');
      const cardBeds = parseInt(card.getAttribute('data-beds'), 10);
      const cardLocation = card.getAttribute('data-location') || 'all';
      const cardPrice = parseInt(card.getAttribute('data-price') || '0', 10);

      // Check location
      const matchesLocation = (currentFilters.location === 'all' || cardLocation === currentFilters.location);

      // Check property type
      const matchesType = (currentFilters.type === 'all' || cardType === currentFilters.type);

      // Check beds
      let matchesBeds = true;
      if (currentFilters.beds !== 'all') {
        const minBeds = parseInt(currentFilters.beds, 10);
        matchesBeds = cardBeds >= minBeds;
      }

      // Check price range
      let matchesPrice = true;
      if (currentFilters.price === 'under-1-5m') {
        matchesPrice = cardPrice < 1500000;
      } else if (currentFilters.price === '1-5m-2m') {
        matchesPrice = cardPrice >= 1500000 && cardPrice <= 2000000;
      } else if (currentFilters.price === 'above-2m') {
        matchesPrice = cardPrice > 2000000;
      }

      if (matchesLocation && matchesType && matchesBeds && matchesPrice) {
        card.classList.remove('filter-hidden');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        visibleCount++;
      } else {
        card.classList.add('filter-hidden');
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
      }
    });

    // Update feedback count
    if (filterCountEl) {
      filterCountEl.textContent = `Showing ${visibleCount} of ${propertyCards.length} curated Austin residences`;
    }

    // Toggle empty state
    if (noPropertiesFoundEl) {
      if (visibleCount === 0) {
        noPropertiesFoundEl.classList.remove('d-none');
      } else {
        noPropertiesFoundEl.classList.add('d-none');
      }
    }

    // Sync quick filter buttons
    filterTabs.forEach(tab => {
      const tabVal = tab.getAttribute('data-property-filter');
      const isSelected = (currentFilters.type === tabVal);
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });

    // Sync select dropdowns
    if (searchLocationSelect) searchLocationSelect.value = currentFilters.location;
    if (searchTypeSelect) searchTypeSelect.value = currentFilters.type;
    if (searchPriceSelect) searchPriceSelect.value = currentFilters.price;
    if (searchBedSelect) searchBedSelect.value = currentFilters.beds;
  };

  // Dedicated Search Bar submit
  if (searchSubmitBtn) {
    searchSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (searchLocationSelect) currentFilters.location = searchLocationSelect.value;
      if (searchTypeSelect) currentFilters.type = searchTypeSelect.value;
      if (searchPriceSelect) currentFilters.price = searchPriceSelect.value;
      if (searchBedSelect) currentFilters.beds = searchBedSelect.value;

      applyCombinedFilters();

      // Smooth scroll down to properties
      const featuredSec = document.getElementById('featuredProperties');
      if (featuredSec) {
        featuredSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Quick type filter tabs
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      currentFilters.type = tab.getAttribute('data-property-filter');
      applyCombinedFilters();
    });
  });

  // Reset Filters Function
  const resetAllPropertyFilters = () => {
    currentFilters = {
      location: 'all',
      type: 'all',
      price: 'all',
      beds: 'all'
    };
    applyCombinedFilters();
  };

  if (searchResetBtn) searchResetBtn.addEventListener('click', resetAllPropertyFilters);
  if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllPropertyFilters);

  // Enclave Quick Filter Trigger
  document.querySelectorAll('[data-enclave-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLocation = e.currentTarget.getAttribute('data-enclave-filter');
      currentFilters.location = targetLocation;
      applyCombinedFilters();

      const featuredSec = document.getElementById('featuredProperties');
      if (featuredSec) {
        featuredSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- 5. Interactive Favorite / Save Property Toggle ---
  document.querySelectorAll('.property-favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isFavorited = btn.classList.toggle('favorited');
      const svgIcon = btn.querySelector('svg');

      if (isFavorited) {
        btn.setAttribute('aria-label', 'Saved to your favorites');
        if (svgIcon) svgIcon.setAttribute('fill', 'currentColor');
      } else {
        btn.setAttribute('aria-label', 'Save property to favorites');
        if (svgIcon) svgIcon.setAttribute('fill', 'none');
      }
    });
  });

  // --- 6. Property Quick View Modal with Photo Gallery & Investment Estimator ---
  const propertyModalEl = document.getElementById('propertyDetailModal');
  const propertyModal = propertyModalEl ? new bootstrap.Modal(propertyModalEl) : null;

  const modalTitle = document.getElementById('modalPropTitle');
  const modalPrice = document.getElementById('modalPropPrice');
  const modalAddress = document.getElementById('modalPropAddress');
  const modalType = document.getElementById('modalPropType');
  const modalBeds = document.getElementById('modalPropBeds');
  const modalBaths = document.getElementById('modalPropBaths');
  const modalSqft = document.getElementById('modalPropSqft');
  const modalYear = document.getElementById('modalPropYear');
  const modalSchool = document.getElementById('modalPropSchool');
  const modalDesc = document.getElementById('modalPropDesc');
  const modalFeaturesList = document.getElementById('modalPropFeatures');
  const modalInquireBtn = document.getElementById('modalInquireBtn');
  const modalEstimatedPayment = document.getElementById('modalEstimatedPayment');

  // Modal Gallery Elements
  const modalGalleryImage = document.getElementById('modalGalleryImage');
  const modalGalleryCaption = document.getElementById('modalGalleryCaption');
  const modalGalleryCounter = document.getElementById('modalGalleryCounter');
  const modalGalleryPrevBtn = document.getElementById('modalGalleryPrevBtn');
  const modalGalleryNextBtn = document.getElementById('modalGalleryNextBtn');
  const modalGalleryThumbsContainer = document.getElementById('modalGalleryThumbs');

  let currentModalProperty = null;
  let currentModalImageIndex = 0;

  function updateModalGallery(index) {
    if (!currentModalProperty || !currentModalProperty.images || currentModalProperty.images.length === 0) return;

    if (index < 0) {
      index = currentModalProperty.images.length - 1;
    } else if (index >= currentModalProperty.images.length) {
      index = 0;
    }
    currentModalImageIndex = index;

    const currentImg = currentModalProperty.images[currentModalImageIndex];

    if (modalGalleryImage) {
      modalGalleryImage.style.opacity = '0.4';
      modalGalleryImage.src = currentImg.url;
      modalGalleryImage.alt = `${currentModalProperty.title} — ${currentImg.title}`;
      setTimeout(() => {
        modalGalleryImage.style.opacity = '1';
      }, 60);
    }

    if (modalGalleryCaption) {
      modalGalleryCaption.textContent = currentImg.title;
    }

    if (modalGalleryCounter) {
      modalGalleryCounter.textContent = `${currentModalImageIndex + 1} of ${currentModalProperty.images.length}`;
    }

    // Update thumbnail active states
    const thumbBtns = document.querySelectorAll('.modal-thumb-btn');
    thumbBtns.forEach((btn, idx) => {
      const isActive = (idx === currentModalImageIndex);
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  if (modalGalleryPrevBtn) {
    modalGalleryPrevBtn.addEventListener('click', () => {
      updateModalGallery(currentModalImageIndex - 1);
    });
  }

  if (modalGalleryNextBtn) {
    modalGalleryNextBtn.addEventListener('click', () => {
      updateModalGallery(currentModalImageIndex + 1);
    });
  }

  // Keyboard navigation for gallery inside open modal
  document.addEventListener('keydown', (e) => {
    if (propertyModalEl && propertyModalEl.classList.contains('show')) {
      if (e.key === 'ArrowLeft') {
        updateModalGallery(currentModalImageIndex - 1);
      } else if (e.key === 'ArrowRight') {
        updateModalGallery(currentModalImageIndex + 1);
      }
    }
  });

  document.querySelectorAll('[data-view-property]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const propId = e.currentTarget.getAttribute('data-view-property');
      const property = sampleProperties.find(p => p.id === propId);

      if (property && propertyModal) {
        currentModalProperty = property;
        currentModalImageIndex = 0;

        if (modalTitle) modalTitle.textContent = property.title;
        if (modalPrice) modalPrice.textContent = property.price;
        if (modalAddress) modalAddress.textContent = property.address;
        if (modalType) modalType.textContent = property.typeName;
        if (modalBeds) modalBeds.textContent = `${property.beds} Bedrooms`;
        if (modalBaths) modalBaths.textContent = `${property.baths} Bathrooms`;
        if (modalSqft) modalSqft.textContent = property.sqft;
        if (modalYear) modalYear.textContent = property.yearBuilt;
        if (modalSchool) modalSchool.textContent = property.schoolDistrict;
        if (modalDesc) modalDesc.textContent = property.description;

        // Populate Gallery Thumbnails
        if (modalGalleryThumbsContainer && property.images) {
          modalGalleryThumbsContainer.innerHTML = '';
          property.images.forEach((imgObj, idx) => {
            const thumbBtn = document.createElement('button');
            thumbBtn.type = 'button';
            thumbBtn.className = `modal-thumb-btn ${idx === 0 ? 'active' : ''}`;
            thumbBtn.setAttribute('aria-label', `View photo ${idx + 1}: ${imgObj.title}`);
            thumbBtn.innerHTML = `<img src="${imgObj.url}" alt="${imgObj.title}" loading="lazy" />`;
            thumbBtn.addEventListener('click', () => {
              updateModalGallery(idx);
            });
            modalGalleryThumbsContainer.appendChild(thumbBtn);
          });
        }

        updateModalGallery(0);

        // Estimated Monthly Payment Calculation (20% down, 6.75% 30-yr fixed, ~1.9% Travis tax, insurance)
        if (modalEstimatedPayment) {
          const loanAmount = property.numericPrice * 0.8;
          const monthlyRate = 0.0675 / 12;
          const nMonths = 360;
          const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, nMonths)) / (Math.pow(1 + monthlyRate, nMonths) - 1);
          const monthlyTax = (property.numericPrice * 0.019) / 12;
          const monthlyIns = (property.numericPrice * 0.004) / 12;
          const totalEstimatedMonthly = Math.round(monthlyPI + monthlyTax + monthlyIns);
          modalEstimatedPayment.textContent = `~$${totalEstimatedMonthly.toLocaleString()}/mo`;
        }

        if (modalFeaturesList) {
          modalFeaturesList.innerHTML = '';
          property.features.forEach(feat => {
            const li = document.createElement('li');
            li.textContent = feat;
            modalFeaturesList.appendChild(li);
          });
        }

        propertyModal.show();
      }
    });
  });

  // "Inquire & Schedule Tour" from Quick View Modal
  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', () => {
      if (propertyModal) {
        propertyModal.hide();
      }
      if (currentModalProperty) {
        populateContactForm(currentModalProperty.title, currentModalProperty.address, currentModalProperty.location);
      }
    });
  }

  // Individual Card "Schedule Tour"
  document.querySelectorAll('[data-inquire-property]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const propId = e.currentTarget.getAttribute('data-inquire-property');
      const property = sampleProperties.find(p => p.id === propId);
      if (property) {
        populateContactForm(property.title, property.address, property.location);
      }
    });
  });

  function populateContactForm(propertyTitle, propertyAddress, propertyLocation) {
    const contactSection = document.getElementById('contact');
    const serviceSelect = document.getElementById('contactService');
    const neighborhoodSelect = document.getElementById('contactNeighborhood');
    const messageInput = document.getElementById('contactMessage');

    if (serviceSelect) {
      serviceSelect.value = 'schedule-tour';
    }

    if (neighborhoodSelect && propertyLocation) {
      neighborhoodSelect.value = propertyLocation;
    }

    if (messageInput) {
      messageInput.value = `Hello Elena, I would like to schedule a private walkthrough and receive the complete property dossier for "${propertyTitle}" (${propertyAddress}). Please advise on your upcoming availability.`;
      updateCharCount();
    }

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('contactName');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 650);
      }
    }
  }

  // --- 7. Contact Form Live Validation & Simulated Submission ---
  const contactForm = document.getElementById('oaklineContactForm');
  const nameField = document.getElementById('contactName');
  const emailField = document.getElementById('contactEmail');
  const phoneField = document.getElementById('contactPhone');
  const serviceField = document.getElementById('contactService');
  const neighborhoodField = document.getElementById('contactNeighborhood');
  const messageField = document.getElementById('contactMessage');
  const consentField = document.getElementById('contactConsent');
  const charCounter = document.getElementById('contactCharCount');
  const submitBtn = document.getElementById('contactSubmitBtn');

  // Success Modal Elements
  const demoSuccessModalEl = document.getElementById('demoSuccessModal');
  const demoSuccessModal = demoSuccessModalEl ? new bootstrap.Modal(demoSuccessModalEl) : null;
  const demoSummaryOutput = document.getElementById('demoSubmissionSummary');
  const resetDemoFormBtn = document.getElementById('resetDemoFormBtn');

  // Character counter helper
  const updateCharCount = () => {
    if (messageField && charCounter) {
      const count = messageField.value.length;
      charCounter.textContent = `${count} / 500 characters`;
    }
  };

  if (messageField) {
    messageField.addEventListener('input', updateCharCount);
  }

  // Automatic US Phone Masking: (XXX) XXX-XXXX
  if (phoneField) {
    phoneField.addEventListener('input', (e) => {
      const numbers = e.target.value.replace(/\D/g, '');
      const len = numbers.length;
      if (len === 0) {
        e.target.value = '';
      } else if (len <= 3) {
        e.target.value = `(${numbers}`;
      } else if (len <= 6) {
        e.target.value = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
      } else {
        e.target.value = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
      }
    });
  }

  // Field validation rules
  const validateField = (field) => {
    if (!field) return true;
    let isValid = true;
    const value = field.value.trim();

    if (field === nameField) {
      isValid = value.length >= 2;
    } else if (field === emailField) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    } else if (field === phoneField) {
      isValid = (value === '' || value.replace(/\D/g, '').length >= 10);
    } else if (field === messageField) {
      isValid = value.length >= 10;
    } else if (field === consentField) {
      isValid = field.checked;
    }

    if (isValid) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      field.setAttribute('aria-invalid', 'false');
    } else {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
      field.setAttribute('aria-invalid', 'true');
    }

    return isValid;
  };

  [nameField, emailField, phoneField, messageField].forEach(input => {
    if (input) {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          validateField(input);
        }
      });
    }
  });

  if (consentField) {
    consentField.addEventListener('change', () => validateField(consentField));
  }

  // Form Submit Handler
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameField);
      const isEmailValid = validateField(emailField);
      const isPhoneValid = validateField(phoneField);
      const isMessageValid = validateField(messageField);
      const isConsentValid = validateField(consentField);

      const isFormValid = isNameValid && isEmailValid && isPhoneValid && isMessageValid && isConsentValid;

      if (!isFormValid) {
        const firstInvalid = contactForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Simulated button spinner
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Transmitting Inquiry...
        `;
      }

      setTimeout(() => {
        const formData = {
          name: nameField.value.trim(),
          email: emailField.value.trim(),
          phone: phoneField.value.trim() || 'Not provided',
          service: serviceField ? serviceField.options[serviceField.selectedIndex].text : 'General Advisory',
          neighborhood: neighborhoodField && neighborhoodField.value ? neighborhoodField.options[neighborhoodField.selectedIndex].text : 'All Austin Areas',
          message: messageField.value.trim(),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        };

        if (demoSummaryOutput) {
          demoSummaryOutput.innerHTML = `
            <div class="p-3 bg-light rounded border mb-3">
              <div class="row g-2 text-start">
                <div class="col-sm-4 text-muted small">Full Name:</div>
                <div class="col-sm-8 fw-semibold">${escapeHtml(formData.name)}</div>
                
                <div class="col-sm-4 text-muted small">Email Address:</div>
                <div class="col-sm-8 fw-semibold">${escapeHtml(formData.email)}</div>
                
                <div class="col-sm-4 text-muted small">Phone Number:</div>
                <div class="col-sm-8">${escapeHtml(formData.phone)}</div>
                
                <div class="col-sm-4 text-muted small">Primary Interest:</div>
                <div class="col-sm-8">${escapeHtml(formData.service)}</div>

                <div class="col-sm-4 text-muted small">Austin Target Area:</div>
                <div class="col-sm-8">${escapeHtml(formData.neighborhood)}</div>
                
                <div class="col-sm-4 text-muted small">Inquiry Message:</div>
                <div class="col-sm-8 text-break">${escapeHtml(formData.message)}</div>

                <div class="col-sm-4 text-muted small">Validated At:</div>
                <div class="col-sm-8 small text-secondary">${escapeHtml(formData.timestamp)}</div>
              </div>
            </div>
          `;
        }

        if (demoSuccessModal) {
          demoSuccessModal.show();
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Submit Consultation Request</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          `;
        }
      }, 450);
    });
  }

  // Reset form handler
  if (resetDemoFormBtn) {
    resetDemoFormBtn.addEventListener('click', () => {
      if (contactForm) {
        contactForm.reset();
        [nameField, emailField, phoneField, messageField, consentField].forEach(el => {
          if (el) {
            el.classList.remove('is-valid', 'is-invalid');
            el.removeAttribute('aria-invalid');
          }
        });
        updateCharCount();
      }
      if (demoSuccessModal) {
        demoSuccessModal.hide();
      }
    });
  }

  // Generic Consultation Buttons
  document.querySelectorAll('[data-consultation-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.getElementById('contactName');
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 650);
        }
      }
    });
  });

  function escapeHtml(string) {
    const div = document.createElement('div');
    div.textContent = string;
    return div.innerHTML;
  }
});
