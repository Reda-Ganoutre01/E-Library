package dev.library.backend.controller;


@RestController
@CrossOrigin 
@RequestMapping("/api/categorys")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public List<Category> getCategorys() {
        return categoryService.getCategorys();
    }

    @GetMapping("/{id}")
    public Category getCategory(@PathVariable("id") Long id) {
        return categoryService.getCategory(id);
    }

    @PostMapping
    public Category createCategory(@RequestBody Category category) {
        return categoryService.createCategory(category);
    }

    @PutMapping
    public Category updCategory(@RequestBody Category category) {
        return categoryService.updCategory(category);
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
    }

}
