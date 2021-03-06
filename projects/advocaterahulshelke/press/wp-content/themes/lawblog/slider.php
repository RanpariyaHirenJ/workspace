<!-- Getting Data for Slider -->
<?php 
    $carousel_cat = get_theme_mod('carousel_setting','1');
    $carousel_count = get_theme_mod('count_setting','4');
    $slider_query = new WP_Query( array( 'cat' => $carousel_cat  , 'showposts' => $carousel_count )); 
?>
<!-- END Getting Data for Slider -->
<div class="row">
  <div class="carouselcontainer col-lg-12">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <?php $i = 0; ?>
        <?php if($slider_query->have_posts()) {
                while($slider_query->have_posts()){
                        $slider_query->the_post();
        ?>

        <?php if($i==0) { ?>
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <?php } else { ?>
        <li data-target="#myCarousel" data-slide-to="<?php echo esc_attr($i); ?>"></li>
        
        <?php } ?>

        <?php $i++; } } ?>
      </ol>

      <?php $i=1; ?>
      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        
        <?php if($slider_query->have_posts()) {
                while($slider_query->have_posts()){
                        $slider_query->the_post();
        ?>
        <?php if($i==1) { ?>
          <div class="item active aligncenter">
            <?php if(has_post_thumbnail()) { ?>
              <a class="set-inline-block" href="<?php the_permalink(); ?>">
                <img class="slider-img-height" src="<?php echo esc_url(wp_get_attachment_url(get_post_thumbnail_id())); ?>" alt="<?php  the_title_attribute();?>">
              </a>
            <?php } ?>
              <div class="carousel-caption">
                <h3 class="carousel-caption-heading">
                  <a href="<?php the_permalink();?>" ><?php the_title();?></a>
                </h3>
              </div>
          </div>
        <?php } else { ?>
          <div class="item aligncenter">
            <?php if(has_post_thumbnail()) { ?>
              <a class="set-inline-block" href="<?php the_permalink(); ?>">
                <img class="slider-img-height" src="<?php echo esc_url(wp_get_attachment_url(get_post_thumbnail_id())); ?>" alt="<?php  the_title_attribute();?>">
              </a>
            <?php } ?>
            <div class="carousel-caption">
            <h3 class="carousel-caption-heading">
              <a href="<?php the_permalink();?>" >
                <?php the_title();?>
              </a>
            </h3>

            </div>
          </div>
        <?php } ?>

        <?php $i++; }} ?>

      </div>
      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only"><?php esc_html_e('Previous','lawblog'); ?></span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only"><?php esc_html_e('Next','lawblog'); ?> </span>
      </a>
    </div>
  </div>
</div>

<?php wp_reset_postdata(); ?>
